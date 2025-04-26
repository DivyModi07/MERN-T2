path = require('path')
expr = require('express')
app = expr()

app.use(expr.static('../public',{index:'2.html'})) 
app.use(expr.static('../style',{index:'style1.html'})) 
app.use(expr.static('../image')) 

app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})