expr = require('express')
app = expr()

let uname = ''
let pass = ''
let subs = ''
app.use(expr.static('../public',{index:'6.html'}))
app.get('/login',(req,res,next)=>{
    uname = req.query.uname
    pass = req.query.password
    subs = req.query.subs
    
    res.set('content-type','text/html')
    next()
})

app.get('/login',(req,res)=>{
    if(subs == 'on'){
        res.write('<H1> Welcome back '+uname+'</h1>\n<a href="/">Logout<a/>')
        res.send()
    }
    else{
        res.write('<h1>Please subscribe</h1> \n<a href="/subscribe">Subscribe</a>')
    }
})

app.get('/subscribe',(req,res)=>{
    res.write("<h1>Thank you for subscribe</h1>")
    res.send()
})
    
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})