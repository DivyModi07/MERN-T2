// form not made

expr=require('express')
app=expr()
sess=require('express-session')

app.use(sess({secret:'hello',saveUninitialized:true,cookie:{maxAge:10000},resave: false}))
app.use(expr.static('../public',{index:'5.html'}))


app.get('/saveSession',(req,res)=>{
    req.session.uname=req.query.uname
    req.session.pass=req.query.password
    res.redirect('/fetchdata')
})

app.get('/fetchdata',(req,res)=>{
    if(req.session.uname=='admin'){
        res.write(`<h1>welcome admin</h1>
                  <a href="/destroy">logout</a>`)
        
    }else{
        res.write(`<h1>invalid</h1>`)
    }
    res.send()
})

app.get('/destroy',(req,res)=>{
        req.session.destroy()
        res.write(`<h1>session destroyed</h1>
            <a href="/">home</a>`)   
            res.send()       
})

app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})
