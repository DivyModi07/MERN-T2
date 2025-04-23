const expr = require('express')
const app = expr()

student = {'name':'deep','age':19}
data = JSON.stringify(student)

app.get('/',(req,res)=>{
    res.set('content-type','text/html')
    // res.write()
    res.send(student.name)
})

app.listen(3005,()=>{console.log(`http://localhost:${3005}`)})
