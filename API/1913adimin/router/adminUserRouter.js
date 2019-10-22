const express = require('express')
const router = express.Router()

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
router.post('/login',(req,res)=>{
   let {us,ps} = req.query
   UserModel.findOne({us,ps})
   .then((data)=>{
     if(data){
      res.send({err:0,msg:'login ok'})
     }else{
      res.send({err:1,msg:'login nook'})
     }
     
   })
   .catch((err)=>{
     res.send({err:2,msg:'内部错误'})
   })
})

module.exports = router