var jwt = require('jsonwebtoken');
// let payload ={
//     uid:12331231,
//     name:'hehehe'
// }
// let screat = 'dadasdfafdsfw;.,./mvfiobjfv'
// // var token = jwt.sign(payload,screat,{expiresIn:60});
// // console.log(token)
// let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEyMzMxMjMxLCJuYW1lIjoiaGVoZWhlIiwiaWF0IjoxNTcxNzI2NDg4LCJleHAiOjE1NzE3MjY1NDh9.5LV2DI_4trdsFypyNvHgeLTceEY2xOAscrUePRjzJm4'
// jwt.verify(token,screat,(err,data)=>{
//     console.log(err,data)
// })
const screat = 'dassdasdsaf;.fsdf,sd;fsadfsa.f'
module.exports={
    createToken(payload,expires){
        let token = jwt.sign(payload,screat,{expiresIn:expires})
        return token
    },
    verifyToken(token){
        return new Promise((resolve,reject)=>{
            jwt.verify(token,screat,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    }
}