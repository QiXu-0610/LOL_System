const express = require('express')
const router = express.Router()
const jwt = require('../utils/jwt')



const UserModel = require('../db/model/userModel')
// 引入用户的数据模型

// 注册接口
//localhost:3000/loluser/reg
router.get('/reg',(req,res)=>{
  let {us,ps} = req.query
  UserModel.insertMany({us,ps})
  .then((data)=>{
    console.log(data,'ok')
    res.send({err:0,msg:'reg ok'})
  })
  .catch((err)=>{
    console.log(err,'no ok')
  })
})

//登录接口  
//localhost:3000/loluser/login
//http://10.60.14.146:3000/loluser/login
router.post('/login',(req,res)=>{
   let {us,ps} = req.body
   UserModel.findOne({us,ps})
   .then((data)=>{
     if(data){
      let token = jwt.createToken({uid:data._id},7*24*60*60)
      res.send({err:0,msg:'login ok',info:{uid:data._id,token:token}})
     }else{
      res.send({err:1,msg:'login nook'})
     }
     
   })
   .catch((err)=>{
     res.send({err:2,msg:'内部错误'})
   })
})

module.exports = router