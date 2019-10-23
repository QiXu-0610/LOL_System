const express = require('express')
const router = express.Router()
const ZhsModel = require('../db/model/zhsModel')

//查询
//localhost:3000/lolzhs/getzhs
router.get('/getzhs',(req,res)=>{
    ZhsModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取信息ok',list:data})
    })
})
//增加
//localhost:3000/lolzhs/addzhs
router.get('/addzhs',(req,res)=>{
    let {zhsimg,zhsname,zhsrank,zhsgrd,zhswin} = req.query
    ZhsModel.insertMany({zhsimg,zhsname,zhsrank,zhsgrd,zhswin})
    .then((data)=>{
        console.log(data)
        res.send({err:0,msg:'添加信息ok',list:data})
    })
 })

 //删除
//localhost:3000/lolzhs/delzhs
router.get('/delzhs',(req,res)=>{
    let {_id} = req.query;
    ZhsModel.deleteOne({_id})
    .then((data)=>{
        res.send({err:0,msg:'删除信息ok',list:data})
    })
 })

 //修改
 //localhost:3000/lolzhs/updatezhs
router.get('/updatezhs',(req,res)=>{
    let {_id,zhsimg,zhsname,zhsrank,zhsgrd,zhswin} = req.query
    ZhsModel.updateOne({_id:_id},{zhsimg,zhsname,zhsrank,zhsgrd,zhswin})
        .then((data)=>{
            console.log(data)
            res.send({err:0,msg:'修改ok'})
        })
})

module.exports = router