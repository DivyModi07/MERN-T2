const expr = require('express')
const app = expr()
app.get('/',(req,res)=>{
    res.set('content-type','text-html')
    res.write('<h1>Hello</h1>')
    res.send()
})

app.get('/about',(req,res)=>{
    res.send('How are you ?')
})

app.use((req,res)=>{
    res.status(404).send('Page not found')
})

app.listen(3000,()=>{console.log(`http://localhost:${3000}`)})
