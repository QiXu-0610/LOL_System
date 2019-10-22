const express = require('express')
const router = express.Router()
const jwt = require('../utils/jwt')

const bodyParser=require("body-parser");
router.use(bodyParser.urlencoded({extended:false})) //解析表单数据格式
router.use(bodyParser.json())  //解析json数据格式

const UserModel = require('../db/model/userModel')
// 引入用户的数据模型

// 注册接口
router.get('/reg',(req,res)=>{
  let {us,ps} = req.query
  UserModel.insertMany({us,ps})
  .then((data)=>{
    console.log(data,'ok')
  })
  .catch((err)=>{
    console.log(err,'no ok')
  })
})

//登录接口  
router.get('/login',(req,res)=>{
   let {us,ps} = req.query
   UserModel.findOne({us,ps})
   .then((data)=>{
     if(data){
      let token = jwt.createToken({uid:data._id},7*24*60*60)
      res.send({err:0,msg:'login ok',info:{uid:data.id,token:token}})
     }else{
      res.send({err:1,msg:'login nook'})
     }
     
   })
   .catch((err)=>{
     res.send({err:2,msg:'内部错误'})
   })
})

module.exports = router