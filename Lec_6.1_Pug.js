expr = require('express')
app = expr()

app.set('view engine','pug')
// app.set('views',__dirname)
app.set('views',__dirname + '/../public')

app.get('/',(req,res)=>{
    res.render('P1')
})

app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})
