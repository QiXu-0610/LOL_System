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


var columns = [
            {
                title: '',
                dataIndex: 'zhsimg',
                key: 'py',
                render(zhsimg){
                    let url=`py${zhsimg}`
                    
                    return(
                        <img src={url} alt=''/>
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
            },
    
  ];
  // const dataSource = [
  //     {name:'网易',age:15,address:'老牛湾',sex:0,key:1,img:'456789'},
  //     {name:'网易',age:15,address:'老牛湾',sex:1,key:2,img:'456789'},
  //     {name:'网易',age:15,address:'老牛湾',sex:2,key:3,img:'456789'},
  // ]
class UserList extends  Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
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
        })
        
    }
    render(){
        let {list} = this.state
        return(
                        <div>
                            <Card>
                                <Table 
                                    columns={columns}
                                    dataSource={list} 
                                
                                />
                            </Card>
                        </div>
                    )
    }
}
export default UserList
