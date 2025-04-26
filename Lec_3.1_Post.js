expr = require('express')
app = expr()

app.use(expr.urlencoded({extended:false}))
app.use(expr.static('../public',{index:'form.html'}))
app.post('/process',(req,res)=>{
    let uname = req.body.fname
    let password = req.body.password

    res.write(uname+' '+password)
    res.send()
})
    
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})