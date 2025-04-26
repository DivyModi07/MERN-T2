path = require('path')
expr = require('express')
app = expr()

app.use(expr.static('../public',{index:'1.html'})) 

// var sp = path.join(__dirname,'../public')
// app.use(expr.static('../public'))
// app.get('/',(req,res)=>{
//     res.sendFile(sp + '/1.html')
// })

app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})