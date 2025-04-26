expr = require('express')
app = expr()

app.use(expr.urlencoded({extended:false}))
app.use(expr.static('../public',{index:'5.html'}))
app.post('/login',(req,res)=>{
    let uname = req.body.uname
    let password = req.body.password

    if(uname == 'admin'){
        res.write('Welcome back Admin')
        res.send()
    }
    else{
        res.write('Please login with Admin name')
        res.send()
    }
    
})
    
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})