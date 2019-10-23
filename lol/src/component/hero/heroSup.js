import React,{Component} from 'react';
import { Table,Card} from 'antd';

  const columns = [
    {
        title: '',
        dataIndex: 'img',
        key: 'img',
        render(imgpath){
            // console.log(imgpath)
            const img = `/py${imgpath}`
            return (
                <img src={img} alt='' width='50px'/>
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
class HeroSup extends Component{ 
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
            console.log(data)
            // this.state.datas=data.data.list
            let datas=data.data.list.filter((item,index) => {
                if(item.type_id===5){
                  return  this.state.datas.push(item[index])
                }
            });
           
            this.setState({datas:datas})
        })
    }
render(){
    return(
        <div>
            <Card>
            <Table columns={columns} dataSource={this.state.datas} />
            {/* <img src='http://10.60.14.146:3000/public/img/1571810198114.png' alt=''/> */}
            </Card> 
        </div>
    )
 }
}
export default HeroSup