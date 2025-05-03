expr=require('express')
app=expr()
app.set('view engine', 'pug');
app.set('views',__dirname+"/../public");
app.get('/',(req,res)=>{
    res.render("P3")
})

app.get('/data',(req,res)=>{
    res.write("welcome "+req.query.name)
    res.send()
})

app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})
