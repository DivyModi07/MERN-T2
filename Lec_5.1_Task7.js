expr = require('express')
app = expr()
cp = require('cookie-parser')

app.use(cp())
app.use(expr.urlencoded())
app.use(expr.static('../public',{index:'7.html'}))

app.post('/process',(req,res)=>{
    const{uname,email,message,rating} = req.body
    const feedback = {uname,email,message,rating}
    res.cookie('feedback',feedback,{maxAge:4000})
    res.send('<h1>Thank you for feedback </h1> <br><br> <a href="/fb">Feedback Details</a>')
})

app.get('/fb',(req,res)=>{
    const feed = req.cookies.feedback
    if(feed){
        res.send(`<h1>Feedback Details:</h1><b>
            <h2>Name: ${feed.uname}</h2>
            <h2>Email ${feed.email}</h2>
            <h2>Message ${feed.message}</h2>
            <h2>Rating ${feed.rating}</h2>
            <a href="/">Logoout</a>`)
    }

    else{
        res.send('<h1>No feedback found</h1>')
    }
})

app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})
