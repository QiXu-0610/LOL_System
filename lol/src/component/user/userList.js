// import React,{Component} from 'react';
// import {Card,Table} from 'antd'

//   const columns = [
//     {
//         title: '',
//         dataIndex: 'index',
//         key: 'index',
//       },
//     {
//       title: '召唤师',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: '段位',
//       dataIndex: 'rank',
//       key: 'rank',
//     },
//     {
//       title: '等级',
//       dataIndex: 'grd',
//       key: 'grd',
//     },
//     {
//       title: '胜率',
//       dataIndex: 'win',
//       key: 'win',
//     },
//   ];
 
// class UserList extends Component{ 
//     constructor(){
//         super()
        
//         this.state={
//             list:[]
//         }
//     }
    
//     componentDidMount() {
//         this.$axios.get('/py/lolzhs/getzhs')
//         .then((data)=>{
//             console.log(data.data.list)
            
//             this.setState({list:data.data.list})
//             console.log(this.state.list)
//          })
        
//     }
//     render(){
//         console.log(this.state.list)
//         let {list} = this.state
        
//         return(
//             <div>
//                 <Card>
//                     <Table 
//                         columns={columns}
//                         dataSource={list} 
                    
//                     />
//                 </Card>
//             </div>
//         )
//     }
//     }
//     export default UserList

import React,{Component} from 'react'
import {Card,Table} from 'antd'
import { Progress } from 'antd';
import { Button } from 'antd';
import UserUpdate from './userUpdate'
// import '../../style/userlist.less'

  // const dataSource = [
  //     {name:'网易',age:15,address:'老牛湾',sex:0,key:1,img:'456789'},
  //     {name:'网易',age:15,address:'老牛湾',sex:1,key:2,img:'456789'},
  //     {name:'网易',age:15,address:'老牛湾',sex:2,key:3,img:'456789'},
  // ]
class UserList extends  Component{
    constructor(){
        super()
        this.state={
            list:[],
           
            
        }
    }
    del=(id)=>{
      let ur = `/py/lolzhs/delzhs?_id=${id}`
      console.log(id)

      this.$axios.get(ur)
        .then((data)=>{
          this.refreshData()
    
           
        })
    }
    update(){
      console.log(123)
    }
 
    componentDidMount(){
       this.refreshData()
      
    }
    refreshData(){
        let url = `/py/lolzhs/getzhs`
        this.$axios.get(url)
        .then((data)=>{
          console.log(data)
          this.setState({list:data.data.list})  
           console.log(this.state.list) 
        })
        
    }
    
    render(){
        let {list} = this.state
        return(
                        <div>
                          <UserUpdate></UserUpdate> 
                            <Card>
                                <Table className='userlist'
                                    columns={ [
                                      {
                                          title: '',
                                          dataIndex: 'zhsimg',
                                          key: 'py',
                                          render(zhsimg){
                                              let url=`py${zhsimg}`
                                              
                                              return(
                                                  <img width='40px' src={url} alt=''/>
                                              )
                                          }
                                        },
                                      {
                                        title: '召唤师',
                                        dataIndex: 'zhsname',
                                        key: 'name',
                                      },
                                      {
                                        title: '段位',
                                        dataIndex: 'zhsrank',
                                        key: 'zhsrank',
                                      },
                                      {
                                        title: '等级',
                                        dataIndex: 'zhsgrd',
                                        key: 'zhsgrd',
                                      },
                                      {
                                        title: '胜率',
                                        dataIndex: 'zhswin',
                                        key: 'zhswin',
                                        render(zhswin){
                                          // console.log(zhsimg)
                                          let win=(zhswin.split('%')[0])
                                          return(
                                              <Progress type="circle" percent={win} width='50px' />
                                          )
                                       }
                                      },
                                      {
                                        title: '',
                                        dataIndex: '_id',
                                        key: '_id',
                                        render:(_id)=>{
                                          let id=_id;
                                          return(
                                            <div>
                                              <Button  type="primary"  onClick={(e)=>{
                                                    
                                                    console.log(id)
                                                    this.update()
                                                    
                                                }}>修改</Button>
                                              <Button  type="danger" onClick={(e)=>{
                                                    
                                                      this.del(id)
                                                      
                                                  }}

                                              >删除</Button>
                                            </div>
                                          )
                                       }
                                       
                                      },
                                      
                              
                            ]}
                                    dataSource={list} 
                                   
                                />
                              
                            </Card>
                        </div>
                    )
    }
}
export default UserList
