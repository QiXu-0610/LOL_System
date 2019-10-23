import React,{Component} from 'react';
// import {Button} from 'antd';
import CustomNav from '../customNav'
import './admin.less'

class Admin extends Component{ 
render(){
    console.log(this.props.children[0])
    return(

        <div className='admin'>
            <div className='admin-nav'>
            <CustomNav></CustomNav>
            </div> 
            <div className='admin-content'>
               
                <div>{this.props.children}</div>
            
            </div>

        </div>
    )
}
}
export default Admin