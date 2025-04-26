expr = require('express')
app = expr()

const CB1 = (req,res,next)=>{
    console.log('hello')
    res.set('content-type','text/html')
    res.write('Welcome')
    next()
}

const CB2 = (req,res,next)=>{
    res.write('Addition of 5+5 is '+(5+5)+'<br>')
    next()
}

app.use('/data',CB1,CB2)
app.get('/data',(req,res)=>{
    res.write('<h1>Hello</h1>')
    res.send()
})
    
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})