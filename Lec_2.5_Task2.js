// Error
expr = require('express')
app = expr()

app.use(expr.urlencoded({extended:true}))
app.use(expr.static('../public',{index:'3.html'}))
app.post('/process',(req,res)=>{

    var str = req.body.textarea
    var a=str.match(/[aeiouAEIOU]/g).length

    res.write(a)
    res.send()
    
})
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})