 import React,{Component} from 'react';
 import {withRouter} from 'react-router-dom'
 import { Menu, Icon, Button } from 'antd';
 const { SubMenu } = Menu; 
 let navData=[
    {name:'首页',path:'/admin'},
    {name:'召唤师管理',
     path:'/admin/user',
     children:[
      {name:'召唤师列表',path:'/admin/user/list'},
      {name:'添加召唤师',path:'/admin/user/add'}]},
  
    {name:'英雄管理',
     path:'/admin/hero',
     children:[
       {name:'英雄列表',path:'/admin/hero/list',
              children:[{name:'全部',path:'/admin/hero/list/qb'},
                        {name:'上单',path:'/admin/hero/list/top'},
                        {name:'打野',path:'/admin/hero/list/jug'},
                        {name:'中单',path:'/admin/hero/list/mid'},
                        {name:'射手',path:'/admin/hero/list/adc'},
                        {name:'辅助',path:'/admin/hero/list/sup'},
                        ]
      
      },
       {name:'英雄登场',path:'/admin/hero/add'},
      
     ]
    },
    {name:'设置',path:'/admin/setting'},

    {name:'其他',path:'/admin/qt'},

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