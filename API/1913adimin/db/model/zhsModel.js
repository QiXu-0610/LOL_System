// 和召唤师集合相关的 scheme 对象和数据模型
const mongoose = require('mongoose')
const  userSchema =  mongoose.Schema({
  zhsimg:{type:String,required:true} ,  //头
  zhsname:{type:String,required:true},   //名
  zhsrank:{type:String,required:true},   //段位
  zhsgrd:{type:Number,required:true},   //等级
  zhswin:{type:String,required:true},   //胜率
})

const  model = mongoose.model('ranks',userSchema)

module.exports =  model