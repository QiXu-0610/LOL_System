 import React,{Component} from 'react';
 import {withRouter} from 'react-router-dom'
 import { Menu, Icon, Button } from 'antd';
 const { SubMenu } = Menu; 
 let navData=[
    {name:'首页',path:'/admin/home'},
    {name:'设置',path:'/setting'},
    {name:'用户管理',
     path:'/admin/user',
     children:[
       {name:'用户列表',path:'/admin/user/list'},
       {name:'用户添加',path:'/admin/user/add'},
      //  {name:'用户删除',
      //   path:'/admin/user/del',
      //   children:[
      //     {name:'用户列表1',path:'/user/list'},
      //     {name:'用户删除2',path:'/user/del',
      //     children:[
      //       {name:'用户列表',path:'/user/list'},
      //       {name:'用户删除',path:'/user/del'},
      //     ]
      //   },
        // ]
      // }
     ]
    },
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