import React,{Component} from 'react';
import { Table,Card,Pagination, Button ,Modal} from 'antd';
import UpdateHero from './updateHeao'


  const columns = [
    {
        title: '',
        dataIndex: 'img',
        key: 'img',
        render(imgpath){
            // console.log(imgpath)
            const img = `/py${imgpath}`
            return (
                <img src={img}  width='40px' height='50px' alt='' width='50px'/>
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
            datas:[],
            updateState:false,
            updateItem:null
        }
    }
    componentDidMount(){
        this.dataSourceData()
    }
    dataSourceData=()=>{
      this.setState({updateState:false})
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
    delHero=(id)=>{
      //  console.log(id)
       let url = `/py/lolhero/delhero?_id=${id}`
       this.$axios.get(url)
       .then((data)=>{
        //  console.log(data)
         this.dataSourceData()
       })
    }
    getUpdateHero=(id)=>{
      console.log(id)
      this.setState({updateState:true})
     this.state.datas.forEach(ele => {
        console.log(ele)
        if(ele._id==id){
          this.setState({updateItem:ele})
        }

      });
     
    }
    handleCancel = e => {
      console.log(e);
      this.setState({
       updateState: false,
      });
    };
render(){
    return(
        <div>
            <Card>
                  <Modal
                    title="修改数据"
                    width="800px"
                    visible={this.state.updateState}
                    footer=""
                    onCancel={this.handleCancel}
                    
                  >
                    <UpdateHero updates={this.state.updateItem} refresh={this.dataSourceData}></UpdateHero>
                    
                  </Modal>
            <Table columns={
              [
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
                {
                  title: '操作',
                  dataIndex: '_id',
                  key: '_id',
                  render:(_id)=>{
                    let id=_id;
                    return(
                      <div>
                        <Button  type="primary"  onClick={(e)=>{
                              
                              
                              this.getUpdateHero(id)
                              
                              
                          }}>修改</Button>
                         
                        <Button  type="danger" onClick={(e)=>{
                              
                                this.delHero(id)
                                
                            }}
            
                        >删除</Button>
                      </div>
                    )
                 }
                 
                },
              ]
            } dataSource={this.state.datas}  />
            </Card> 
        </div>
    )
 }
}
export default HeroSup