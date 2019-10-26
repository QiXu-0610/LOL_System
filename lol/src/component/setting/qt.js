import React,{Component} from 'react';
import { Input,Table,Card,Pagination} from 'antd';
import './qt.less'

const { Search } = Input;

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
class Qt extends Component{
constructor(){
    super()
    this.state={
        datas:[],
        flag:false
    }   
}
search=(value)=>{
    // console.log(value)
    let url = `/py/lolhero/selhero?kw=${value}`
    console.log(url,this.state)
    this.$axios.get(url)
    .then((data)=>{
        const list = data.data.list
        // this.setState({name:list.name,img:list.img,type:list.type,info:list.info})
        this.setState({datas:data.data.list,flag:true})
        console.log(this.state)   
    })
    .catch((err)=>{
        console.log(err)
    })
}
componentDidMount(){
    this.hot()
}
hot=()=>{
    let url = `/py/lolhero/gethero`
    console.log(url,this.state)
    this.$axios.get(url)
    .then((data)=>{
        const list = data.data.list
        // this.setState({name:list.name,img:list.img,type:list.type,info:list.info})
        this.setState({datas:data.data.list})
        console.log(this.state)  
    })
    .catch((err)=>{
        console.log(err)
    })
}
render(){
    return(
        <div>

          <Card className="qt">
            <h1>英雄搜索</h1>
            <Search
            className='search'
            placeholder="请输入关键字查询英雄"
            enterButton="查询"
            size="large"
            onSearch={(value)=>{
                this.search(value)
              
            }}
            />
            {this.state.flag?<Table columns={columns} dataSource={this.state.datas}  />:
            <div className="hot">
                <h4>热门搜索</h4>
                <Table columns={columns} dataSource={this.state.datas}  />
            </div>}
          </Card>
          <div className="footer"> 
                <div>Design by : faker pyy ts uzi</div> 
                <div>英雄联盟官方唯一指定后台管理系统</div>
          </div>
        
        </div>
    )
 }
}
export default Qt