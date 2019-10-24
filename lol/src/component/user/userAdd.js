import React,{Component} from 'react';
import {Card,Input} from 'antd';
// import Avator from './userAdd/userimg'
import './userAdd.less'

class UserAdd extends Component{ 
constructor(){
    super()
    this.state={
        zhsimg:'',
        zhsname:'',
        zhsrank:'',
        zhsgrd:'',
        zhswin:''
    }   
}
up=()=>{
    let file=this.refs.file.files[0]
    let formdata=new FormData()
    formdata.append('hehe',file)
    let config = {
        headers:{'Content-Type':'multipart/form-data'}
    };
    this.$axios.post('/py/lolfile/img',formdata)
    .then((data)=>{
        // console.log(data)
        this.setState({zhsimg:data.data.imgPath})
    })
    .catch((err)=>{
        console.log(err)
    })
}
submit=()=>{
    console.log(this.state)
    let url = `/py/lolzhs/addzhs?zhsname=${this.state.zhsname}&zhsrank=${this.state.zhsrank}&zhsgrd=${this.state.zhsgrd}&zhswin=${this.state.zhswin}&zhsimg=${this.state.zhsimg}`
    console.log(url)
    this.$axios.get(url)
    .then((data)=>{
      console.log(data)    
    })
}
render(){
    return(
        <div className='userAdd-box'>
            <Card className="userAdd-content">
                <h1>召唤师信息</h1>
                <div className="userAdd-list">
                  <Input placeholder="召唤师" value={this.state.zhsname} onChange={
                      (e)=>{
                        this.setState({zhsname:e.target.value})
                      }
                  }/>
                  <Input placeholder="段位" value={this.state.zhsrank} onChange={
                      (e)=>{
                        this.setState({zhsrank:e.target.value})
                      }
                  }/>
                  <Input placeholder="等级" value={this.state.zhsgrd} onChange={
                      (e)=>{
                        this.setState({zhsgrd:e.target.value})
                      }
                  }/>
                  <Input placeholder="胜率" value={this.state.zhswin} onChange={
                      (e)=>{
                        this.setState({zhswin:e.target.value})
                      }
                  }/>
                  <div>
                     <input type="file" ref='file'/>
                     <button onClick={this.up}>上传</button>
                     {/* <img src={this.state.zhsimg} alt=""/> */}
                  </div> 
                  <button onClick={this.submit}>提交</button>
                  </div>    
            </Card>
        </div>
    )
 }
}
export default UserAdd