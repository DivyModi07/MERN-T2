expr = require('express')
app = expr()

app.use(expr.static('../public',{index:'form.html'}))
app.get('/process',(req,res)=>{
    let uname = req.query.fname
    let pass = req.query.password

    response = {
    uname1:req.query.fname,
    pass1:req.query.password
    }

    res.write(uname+" "+pass)
    res.send()
    
})
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})