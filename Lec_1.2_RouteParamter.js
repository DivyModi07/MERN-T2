const expr = require('express')
const app = expr()
app.get('/:id',(req,res)=>{
    res.set('content-type','text-html')
    res.write('Your user id is: '+req.params.id)
    res.send()
})

app.get('/userId/:uid/test/:test',(req,res)=>{
    res.set('content-type','text-html')
    res.write('Id: '+req.params.uid+'  Test:'+req.params.test)
    res.send()
})

app.get('/things/:items/:id',(req,res)=>{
    res.set('content-type','text-html') // write res.json() or res.set('content-type','json-application')
    res.json('Items: '+req.params.items+'  Id:'+req.params.id)
    res.send()
})

app.get('/flight/:from-:to',(req,res)=>{
    res.set('content-type','text-html')
    res.write('Flight: '+req.params.from +'-' +req.params.to)
    res.send()
})

app.listen(3000,()=>{console.log(`http://localhost:${3000}`)})
