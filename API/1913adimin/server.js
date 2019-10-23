const express  = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const db =  require('./db/connect')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public',express.static(path.join(__dirname,'./public')))

const  AdminUserRouter = require('./router/adminUserRouter')
 const  AdminheroRouter = require('./router/adminheroRouter')
 const  AdminfileRouter = require('./router/adminFileRouter')


app.use('/loluser',AdminUserRouter)
 app.use('/lolhero',AdminheroRouter)
 app.use('/lolfile',AdminfileRouter)
app.listen(3000,()=>{
  console.log('服务器启动')
})