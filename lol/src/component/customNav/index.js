 import React,{Component} from 'react';
 import {withRouter} from 'react-router-dom'
 import { Menu, Icon, Button } from 'antd';
 const { SubMenu } = Menu; 
 let navData=[
    {name:'用户管理',
     path:'/admin/user',
     children:[
      {name:'用户列表',path:'/admin/user/list'},
      {name:'用户添加',path:'/admin/user/add'}]},
  
    {name:'英雄管理',
     path:'/admin/hero',
     children:[
       {name:'英雄列表',path:'/admin/hero/list'},
       {name:'英雄登场',path:'/admin/hero/add'},
      
     ]
    },
    {name:'设置',path:'/setting'},

    {name:'其他',path:'/setting'},

]

class CustomNav extends Component{ 
    
    jump=(path)=>{
        this.props.history.push(path)
      }
      renderItem=(data)=>{
        return data.map((item,index)=>{
          if(item.children){
            // 多级
            return(
              <SubMenu title={item.name}>
                {this.renderItem(item.children)}
              </SubMenu>
            )
          }else{
            return <Menu.Item onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
          }
          
        }) 
      }
      render() {
        return (
          <div style={{ width: 256 }}>
         
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
            >
              {this.renderItem(navData)}

            </Menu>
          </div>
        );
 }
}
export default withRouter(CustomNav)