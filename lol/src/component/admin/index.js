import React,{Component} from 'react';
import {Button} from 'antd';
import './admin.less'
class Admin extends Component{ 
render(){
    return(
        <div className='admin'>
            <div className='admin-nav'>
                导航
            </div>
            <div className='admin-content'>
                <div>头部</div>
                <div>子路由</div>      
            </div>

        </div>
    )
}
}
export default Admin