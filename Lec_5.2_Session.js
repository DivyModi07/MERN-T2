expr = require('express')
app = expr()
cp = require('cookie-parser')
sess = require('express-session')

app.use(sess({secret:'Hello Lock',saveUninitialized:true,resave:true,cookie:{maxAge:10000} }))

app.get('/',(req,res)=>{
    if(req.session.pv){
        req.session.pv++
        res.send(`<h2>You visited this page ${req.session.pv} times</h2>`)
    }

    else{
        req.session.pv = 1
        res.send('Welcome to this website')
    }
})

app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})

