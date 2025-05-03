expr=require('express')
app=expr()
multer = require('multer')

var store = multer.diskStorage({
    destination:"Single",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

var upload = multer({storage:store}).single('myfile')

app.use(expr.static('../public',{index:'mul.html'}))
app.post('/data',upload,(req,res)=>{
    if(req.file){
        res.send(`<h1>File ${req.file.originalname} is uploaded in ${req.file.destination}</h1>`)
    }
})

app.listen(5007,()=>{console.log(`http://localhost:${5007}`)})

