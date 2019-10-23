const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false})) //解析表单数据格式
app.use(bodyParser.json())  //解析json数据格式
app.get('/login',(req,res)=>{
    let data = req.query;
    console.log(data)
    if(data.us=='wsl'&&data.ps=='123'){
        res.send({err:0,code:'登陆成功'})
    }else{
        res.send({err:1,code:'登陆失败'})
    }
    
})
app.post('/reg',(req,res)=>{
    console.log('postdata',req.body)
    
})

app.listen(3000,()=>{
    console.log('服务器启动')
})

//url  localhost:3000/test