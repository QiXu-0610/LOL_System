const express = require('express')
const router = express.Router()
const HeroModel = require('../db/model/heroModel')

//查询
//localhost:3000/lolhero/gethero
router.get('/gethero',(req,res)=>{
    HeroModel.find()
    .then((data)=>{
        res.send({err:0,msg:'获取信息ok',list:data})
    })
})


//添加
//localhost:3000/lolhero/addhero
router.get('/addhero',(req,res)=>{
   let {name,img,type,type_id,info} = req.query
   HeroModel.insertMany({name,img,type,type_id,info})
   .then((data)=>{
       console.log(data)
       res.send({err:0,msg:'添加信息ok',list:data})
   })
})

//删除
//localhost:3000/lolhero/delhero
router.get('/delhero',(req,res)=>{
    let {_id} = req.query;
    HeroModel.deleteOne({_id})
    .then((data)=>{
        res.send({err:0,msg:'删除信息ok',list:data})
    })
 })

 //修改
 //localhost:3000/lolhero/updatehero
router.get('/updatehero',(req,res)=>{
    let {_id,name,img,type,type_id,info} = req.query
    HeroModel.updateOne({_id:_id},{name,img,type,type_id,info})
        .then((data)=>{
            console.log(data)
            res.send({err:0,msg:'修改ok'})
        })
})

//关键字查询
//localhost:3000/lolhero/selhero
router.get('/selhero',(req,res)=>{
    let {kw} = req.query;
    let reg = new RegExp(kw);       //创建正则对象
    HeroModel.find({$or:[{name:{$regex:reg}},{info:{$regex:reg}}]})
        .then((data)=>{
            res.send({err:0,msg:'获取信息ok',list:data})
        })
})

module.exports = router