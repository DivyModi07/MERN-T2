expr = require('express')
app = expr()

app.use(expr.static('../public',{index:'4.html'}))
app.get('/calc',(req,res)=>{
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    if((num1>0)&&(num2>0)){
        let cal = req.query.operation
        if(cal == 'Addition'){
            let add = num1+num2
            res.write('Addition: '+add)
            res.send()
        }
        else if(cal == 'Substraction'){
            let sub = num1-num2
            res.write('Substraction : '+sub)
            res.send()
        }
        else if(cal == 'Multiplication'){
            let mul = num1*num2
            res.write('Multiplication: '+mul)
            res.send()
        }
        else if(cal == 'Division'){
            let div = num1/num2
            res.write('Division: '+div)
            res.send()
        }
        else{
            res.write('Select any formula')
            res.send()
        }
    }
    else{
        res.write('Enter Valid No.')
        res.send()
    }

   
    
})
app.listen(3007,()=>{console.log(`http://localhost:${3007}`)})