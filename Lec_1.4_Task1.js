// Write a express JS script to define one JSON arry of 3 objects having property name and age on a home page display JSON object .
// If user request sorted name on sort page than all name along with their age should be printed in DESC order of age.

const expr = require('express')
const app = expr()

app.get('/',(req,res)=>{
   student = [{name:'abc',age:28},{name:'def',age:40},{name:'ghi',age:10}]
   res.send(student)
})

app.get('/sort',(req,res)=>{
    sort = student.sort((a,b)=>b.age-a.age)
    for ( i in sort){
        res.write('Name:'+sort[i].name+' Age:'+sort[i].age + '\n\n')
    }
    res.send()
 })

 app.get('/table',(req,res)=>{
    res.write(`<table border="1px" cellspacing="4" cellpadding="4">`)
    res.write(`<tr><th>Name</th><th>Age</th></tr>`)
    for ( i of student){
        res.write(`<tr><td>${i.name}</td><td>${i.age}</td></tr>`)
    }
    res.write(`</table>`)
    res.send()
 })

app.listen(3000,()=>{console.log(`http://localhost:${3000}`)})
