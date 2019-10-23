var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lol',{ useNewUrlParser: true , useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', ()=>{
  console.log('db no ok ')
});
db.once('open', function() {
  console.log('数据库启动')
});