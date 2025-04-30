expr = require('express')
app = expr()
cp = require('cookie-parser')

app.use(cp())

// app.get('/',(req,res)=>{
//     res.cookie('fname','Divy')
//     res.cookie('lname','Modi')

//     res.send('cookie-set -> go & inspect')
// })

app.get('/',(req,res)=>{
    res.cookie('fname','Divy')
    res.cookie('lname','Modi')

    res.cookie('mail','a@g',{expires:new Date(Date.now()+10000)})

    res.send('cookie-set -> go & inspect')
})

app.get('/cookie',(req,res)=>{
    res.write(JSON.stringify(req.cookies)+"\n")
    res.write(req.cookies.fname+" ")
    res.send()
})

app.get('/clear',(req,res)=>{
    res.clearCookie('fname')
    res.send()
})

app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})
