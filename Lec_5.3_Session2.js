// https://sites.google.com/view/mern-express/project_list2024

expr=require('express')
app=expr()
sess=require('express-session')

app.use(sess({secret:'hello',saveUninitialized:true,cookie:{maxAge:10000},resave: false}))
app.use(expr.static('../public',{index:'5.html'}))

app.get('/saveSession',(req,res)=>{
    req.session.uname=req.query.uname
    req.session.pass=req.query.password
    res.redirect('/fetchsession')
})

app.get('/fetchsession',(req,res)=>{
    res.set('content-type','text/html')
    res.write(`<h2>welcome ${req.session.uname}</h2> <a href="/deletesession">logout</a>`)
    res.send()
})

// app.get('/deletesession',(req,res)=>{
//     req.session.destroy()
//     res.redirect('/')
// })

app.get('/deletesession',(req,res)=>{
    res.clearCookie('connect.sid')
    res.redirect('/')
})


app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})

