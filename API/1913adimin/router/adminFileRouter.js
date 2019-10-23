const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const multer = require('multer')
//localhost:3000/lolfile/img
router.post('/img',multer().single('hehe'),(req,res)=>{
    console.log(req.file)
    let {buffer,mimetype,originalname} = req.file
    let types=['gif','jpg','jpeg','png']
    let fileType = mimetype.split('/')[1];
    if(types.indexOf(fileType) === -1){
        return res.send({err:1,msg:'文件类型错误'})
    }
    let extname = path.extname(originalname)
    let filename = (new Date()).getTime()+parseInt(Math.random()*242342353)
    fs.writeFile(path.join(__dirname,`../public/img/${filename}${extname}`),buffer,(err)=>{
        if(err){
            res.send({err:2,msg:'文件上传错误'})
        }else{
            res.send({err:0,msg:'上传ok',imgPath:`/public/img/${filename}${extname}`})
        }
    })
})
module.exports = router