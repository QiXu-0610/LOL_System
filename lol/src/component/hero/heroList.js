import React,{Component} from 'react';
import { Table,Card,Pagination} from 'antd';

  const columns = [
    {
        title: '',
        dataIndex: 'img',
        key: 'img',
        render(imgpath){
            // console.log(imgpath)
            const img = `/py${imgpath}`
            return (
                <img src={img} width='40px' height='50px' alt='' width='50px'/>
            )
        }
      },
    {
      title: '英雄',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '名称',
      dataIndex: 'info',
      key: 'info',
    },
    {
      title: '位置',
      dataIndex: 'type',
      key: 'type',
    },
  ];
class Hero extends Component{ 
    constructor(){
        super()
        this.state={
            datas:[]
        }
    }
    componentDidMount(){
        this.dataSourceData()
    }
    dataSourceData(){
        let url = '/py/lolhero/gethero'
        this.$axios.get(url,{})
        .then((data)=>{
            // this.state.datas=data.data.list
            this.setState({datas:data.data.list})
        })
    }
render(){
    return(
        <div>
            <Card>
            <Table columns={columns} dataSource={this.state.datas}  />
            </Card> 
        </div>
    )
 }
}
export default Hero