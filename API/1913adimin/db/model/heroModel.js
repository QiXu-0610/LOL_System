// 和用户集合相关的 scheme 对象和数据模型
const mongoose = require('mongoose')
const  heroSchema =  mongoose.Schema({
  name:{type:String,required:true} , 
  img:{type:String,required:true},
  type:{type:String,required:true},     
  type_id:{type:Number,required:true},     
  info:{type:String,required:true},     
})

const  model = mongoose.model('heros',heroSchema)

module.exports =  model