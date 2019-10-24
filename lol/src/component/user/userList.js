import React,{Component} from 'react';
import {Card,Table} from 'antd'

const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
     
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
     
    },
  ];
  
  const columns = [
    {
      title: '召唤师',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '段位',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'LP',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '等级',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '胜率',
      dataIndex: 'address',
      key: 'address',
      render(){
          return(
            <span></span>
          )
      }
    },
  ];
class UserList extends Component{ 
componentDidMount(){
    let url = '/py/lolhero/gethero'
    this.$axios.get(url)
    .then((data)=>{
        console.log(data,111)
    })
    .catch(()=>{
        console.log('err')
    })
}
render(){
    
    return(
        <div className='userlist-box'>
            <Card>
                <Table dataSource={dataSource} columns={columns}></Table>
            </Card>
        </div>
    )
 }
}
export default UserList