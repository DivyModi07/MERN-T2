expr = require('express')
app = expr()

app.use(expr.static('../public'))
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})