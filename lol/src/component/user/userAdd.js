import React,{Component} from 'react';
import {Card,Input,Button,Result} from 'antd';
import './userAdd.less'


class UserAdd extends Component{ 
constructor(){
    super()
    this.state={
        zhsimg:'',
        zhsname:'',
        zhsrank:'',
        zhsgrd:'',
        zhswin:'',
        submitstate:false
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
        alert('上传成功!')
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
      this.setState({submitstate:true})
    })
}
goList=()=>{
    console.log('list')
    this.props.history.push('/admin/user/list')
}
add=()=>{
    console.log('go on')
    window.location.reload()
}
render(){
    return(
        <div className='userAdd-box'>
             {!this.state.submitstate? <Card className="userAdd-content">
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
                      <h4>请上传头像</h4>
                     <input type="file" ref='file'/>
                     <Button onClick={this.up}>上传</Button>
                     {/* <button onClick={this.up}>上传</button> */}
                     
                  </div> 
                  <Button onClick={this.submit}>提交</Button>
                  {/* <button onClick={this.submit}>提交</button> */}
                  </div>    
            </Card>:
            <Result
                className="submit"
                status="success"
                title="提交成功!"
                extra={[
                <Button type="primary" onClick={this.goList}>
                    召唤师列表
                </Button>,
                <Button onClick={this.add}>继续添加</Button>,
                ]}
            />}
            <div className="footer"> 
                <div>Design by : faker pyy ts uzi</div> 
                <div>英雄联盟官方唯一指定后台管理系统</div>
            </div>
           
        </div>
    )
 }
}
export default UserAdd