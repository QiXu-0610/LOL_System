
import React,{Component} from 'react'
import {Card,Table} from 'antd'
import { Progress } from 'antd';
import { Button } from 'antd';
import UserUpdate from './userUpdate'

class UserList extends  Component{
    constructor(){
        super()
        this.state={
            list:[],
            updateState:false,
            updataData:null
            
        }
    }
    del=(id)=>{
      let ur = `/py/lolzhs/delzhs?_id=${id}`
   

      this.$axios.get(ur)
        .then((data)=>{
          this.refreshData()
    
           
        })
    }
    update=(id)=>{

      let url = `/py/lolzhs/getzhs`
        this.$axios.get(url)
        .then((data)=>{

          data.data.list.forEach(item => {
            if(item._id==id){
           
              this.setState({updateState:true,updataData:item})
            }
          });
        })
    }
 
    componentDidMount(){
       this.refreshData()
      
    }
    refreshData=()=>{
        this.setState({updateState:false})
        let url = `/py/lolzhs/getzhs`
        this.$axios.get(url)
        .then((data)=>{
     
          this.setState({list:data.data.list})  
          
        })
        
    }
    
    render(){
        let {list,updateState,updataData} = this.state
        return(
                        <div>
                          {!updateState||<UserUpdate  data={updataData} refresh={this.refreshData}></UserUpdate>} 
                            <Card>
                                <Table 
                                    className='userlist'
                                    columns={ [
                                      {
                                          title: '',
                                          dataIndex: 'zhsimg',
                                          key: 'py',
                                          render(zhsimg){
                                              let url=`py${zhsimg}`
                                              
                                              return(
                                                  <img width='40px' height='40px' src={url} alt=''/>
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
                                        title: '操作',
                                        dataIndex: '_id',
                                        key: '_id',
                                        render:(_id)=>{
                                          let id=_id;
                                          return(
                                            <div>
                                              <Button  type="primary"  onClick={(e)=>{
                                                    
                                                    
                                                    this.update(id)
                                                    
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
