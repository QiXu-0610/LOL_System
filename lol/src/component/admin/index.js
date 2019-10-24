import React,{Component} from 'react';
// import {Button} from 'antd';
import CustomNav from '../customNav'
import './admin.less';
import { Avatar } from 'antd';

class Admin extends Component{ 
render(){
    console.log(this.props.children[0])
    return(

        <div>
            <div className='header'>
                <img src='../../static/logo-public.png'></img>
                <span className='zhs'>亲爱的召唤师你好</span>
                <Avatar className='avator' size={64} icon="user" />
                

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