const express  = require('express')
const app = express()
const db =  require('./db/connect')


const  AdminUserRouter = require('./router/adminUserRouter')

app.use('/loladmin',AdminUserRouter)
app.listen(3000,()=>{
  console.log('服务器启动')
})