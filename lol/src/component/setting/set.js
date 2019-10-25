import React,{Component} from 'react';
import {Card,Tabs,Input,Button,Result} from 'antd'
import './set.less'
const { TabPane } = Tabs;
class Set extends Component{ 
    constructor(){
        super()
        this.state={
            username:'',
            name:'',
            pwd:'',
            alert:false
        }
    }

callback=(key)=> {
  let user = sessionStorage.getItem('us')
  
  this.setState({username:user})
  console.log(key,this.state.username)

}
add=()=>{
    console.log(123)
    let us = this.state.name;
    let ps = this.state.pwd;
    console.log(us)
    let url = `/py/loluser/reg?us=${us}&ps=${ps}`
        this.$axios.get(url)
        .then((data)=>{
          this.setState({alert:true})
    })
}
sx=()=>{
    this.setState({alert:false,name:'',pwd:''})
}
exit=()=>{
    sessionStorage.removeItem('us')
    this.props.history.push('/login')
}
render(){
    let {username,alert,name,pwd}=this.state
    return(
        <div>
            <Card>
            {!alert||<Result className ='success'
                        status="success"
                        title="添加成功"
                        extra={[
                        <Button type="primary" key="console" onClick={this.sx.bind(this)}> 
                            继续添加
                        </Button>
                       
                        ]}
            />}
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="管理员信息" key={username}>
                    当前管理员:{username}
                </TabPane>
                <TabPane tab="添加管理员" key="2">
                  账户:  <Input  value={name} onChange={
                    (e)=>{
                        this.setState({name:e.target.value})
                    }
                }></Input>
                    
                  密码:  <Input.Password  value={pwd} onChange={
                    (e)=>{
                        this.setState({pwd:e.target.value})
                    }
                } />
                  <Button onClick={this.add.bind(this)}>添加</Button>
                </TabPane>
                <TabPane tab="退出登录" key="3">
                    <Button onClick={this.exit.bind(this)}>退出</Button>
                </TabPane>
            </Tabs>
            </Card>
        </div>
    )
 }
}
export default Set