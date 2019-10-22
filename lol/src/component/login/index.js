import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox,Card,message } from 'antd';

class Login extends Component {
    submit=()=>{
        console.log('登录',this)
        // let reuslt = this.props.form.getFieldsValue()
        // console.log(reuslt)
        this.props.form.validateFields((err,data)=>{
            if(err){
                message.error('输入信息有误请重试')
            }else{
                message.success('登录成功1s后跳转首页',1,()=>{
                    this.props.history.push('/admin')
                })
            }
            console.log(err,data)
        })
    }
  render() {
    //   console.log(this,'这里是登录组件')
      let {getFieldDecorator} = this.props.form
    return (
        <Card style={{width:'400px',position:'fixed',top:'17vh',right:'50px'}}>
      <div className="login-form">
        <Form.Item>
            {getFieldDecorator('us',{
                rules:[{required:true,message:'请出入账户名'},
                       {min:6,message:'用户名长度6到9位'},
                       {max:9,message:'用户名长度6到9位'}
            ]
            })(
                 <Input
                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                 placeholder="Username"
               />
            )}
           
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('ps',{})(
                 <Input
                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                 type="password"
                 placeholder="Password"
               />
            )}
           
        </Form.Item>
        <Form.Item>
         <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" onClick={this.submit} className="login-form-button">
            登录
          </Button>
           <a href="">注册账号</a>
        </Form.Item>
      </div>
      </Card>
    )
  }
}
export default Form.create()(Login)