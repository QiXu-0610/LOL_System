const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false})) //解析表单数据格式
app.use(bodyParser.json())  //解析json数据格式

app.get('/login',(req,res)=>{
    res.send({err:0,msg:'login ok'})
})
app.post('/reg',(req,res)=>{
    res.send({err:0,msg:'reg ok'})
})
app.listen(3000,()=>{
    console.log('服务器启动')
})

//url  localhost:3000/test