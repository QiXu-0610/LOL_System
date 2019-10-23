 import React,{Component} from 'react';
 import {withRouter} from 'react-router-dom'
 import { Menu, Icon, Button } from 'antd';
 const { SubMenu } = Menu; 
 let navData=[
    {name:'召唤师管理',
     path:'/admin/user',
     children:[
      {name:'召唤师列表',path:'/admin/user/list',
          children:[{name:'召唤师1',path:'/admin/user/list/one'},
                    {name:'召唤师2',path:'/admin/user/list/two'},
                    {name:'召唤师3',path:'/admin/user/list/three'}
                    ]
      },
      {name:'添加召唤师',path:'/admin/user/add'}]},
  
    {name:'英雄管理',
     path:'/admin/hero',
     children:[
       {name:'英雄列表',path:'/admin/hero/list',
              children:[{name:'全部',path:'/admin/user/list/qb'},
                        {name:'上单',path:'/admin/user/list/top'},
                        {name:'打野',path:'/admin/user/list/jug'},
                        {name:'中单',path:'/admin/user/list/mid'},
                        {name:'射手',path:'/admin/user/list/adc'},
                        {name:'辅助',path:'/admin/user/list/sup'},
                        ]
      
      },
       {name:'英雄登场',path:'/admin/hero/add'},
      
     ]
    },
    {name:'设置',path:'/setting'},

    {name:'其他',path:'/setting'},

]

class CustomNav extends Component{ 
    
    jump=(path)=>{
      console.log(path)
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