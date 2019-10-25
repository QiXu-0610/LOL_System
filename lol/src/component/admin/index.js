import React,{Component} from 'react';
// import {Button} from 'antd';
import CustomNav from '../customNav'
import './admin.less';
import { Avatar } from 'antd';

class Admin extends Component{ 
    constructor(){
        super()
        this.state={
            us:''
        }
    }
    componentDidMount(){
        let user = sessionStorage.getItem('us')
        this.setState({us:user})
    }
render(){

    let {us} = this.state
    return(

        <div className='total'>
            <div className='header'>
                <img src='../../static/logo-public.png'></img>
                <i className='pt'>信息管理平台</i>
                <span className='zhs'>亲爱的召唤师你好{us}</span>
                <Avatar className='avator' size={40} icon="user" />
                

            </div>
            <div className='admin'>
               
                <div className='admin-nav'>
                    <CustomNav></CustomNav>
                </div> 
                
                <div className='admin-content'>
                    
                    <div>
                    
                        {this.props.children}
                       
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
}
export default Admin