import React,{Component,Fragment} from 'react';
// import {WithRouter}  from react-router-dom
import { Card, Select ,Input,Upload,Button,Icon,Modal,notification, AutoComplete } from 'antd';

import './newHero.less'

 const { Option } = Select;
const type_id=[1,2,3,4,5]
const match ={1:'上单',2:'打野',3:'中单',4:'射手',5:'辅助'}


class HeroNew extends Component{ 
 constructor(){
     super()
     this.state={
         img:'',
         name:'',
         info:'',
         type:'',
         type_id:'',
         visible:false

     }
 }
 initData=()=>{
    this.setState({
    img:'',
    name:'',
    info:'',
    type:'',
    type_id:'',
    visible:false})
 }
 onChange=(value)=> {
    console.log(`selected ${value}`);
    this.setState({type_id:value,type:match[value]})

    
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
 openNotification = () => {
    const args = {
      message: '上传成功',
      description:
        'ok',
      duration: 0.3,
    };
    notification.open(args);
    setTimeout(()=>{ this.props.history.push('/admin/hero/list/qb')},1000)
   
            
  };
 upload=()=>{
    let file=this.refs.file.files[0]
    let formdata=new FormData()
    formdata.append('hehe',file)
    this.$axios.post('/py/lolfile/img',formdata)
    .then((data)=>{
 
      this.setState({img:data.data.imgPath,visible:true})

    })
    .catch((err)=>{
        console.log(err)
    })
  }
  submit=()=>{
      console.log(this.state)
      if(this.state.img&& this.state.name && this.state.info && this.state.type){
          this.$axios.get(`py/lolhero/addhero?img=${this.state.img}&name=${this.state.name}
          &type=${this.state.type}&info=${this.state.info}&type_id=${this.state.type_id}`,)
          .then((data)=>{

          console.log(data)
          if(data.data.err ==0){
            this.openNotification()

             
          }
          })

      }else{
          alert('请填写完整信息')
      }
  }
render(){
    return(
        <div className='newHero'>
           
            <Card style={{width:600}}>
        
           <h2>新英雄</h2>

           <div className='inp'>
            <label>英雄名字</label>
            <Input type='text' value ={this.state.name}
              style={{ width: 240}}
              onChange={
                  (e)=>{
                      this.setState({name:e.target.value})
                  }
                  }/>
            </div>


            <br/>
            <div className='inp'>
            <label>英雄名称</label>
            <Input type='text' value ={this.state.info} 
              style={{ width: 240}}
              onChange={
                  (e)=>{
                      this.setState({info:e.target.value})
                  }
                  }/>
            </div>

            <br/>
            <div className='inp'>
            <label>选择位置</label>
            <Select
                showSearch
                style={{ width: 200 }}
                value ={this.state.type_id}
                placeholder="dddd"
                onChange={this.onChange }
                >
            {type_id.map((item,index)=>{
                return(
                    <Option value={item}>{item}</Option>
                )
            })}

        

            </Select>
            </div>
            <br/>
            <div className='inp'>
            <label>位置</label>
            <Input type='text' value ={this.state.type}  style={{ width: 240}}/>
           </div>

            <br/>
            <div className='inp'>
            <input type='file' ref = 'file'></input>
            <Button onClick={this.upload}>上传</Button>
            <Modal
    
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
         
        >
          <p>图片上传成功</p>
        
        </Modal>
            </div>
            <br/>
            <Button onClick = {this.submit}>提交</Button>
             
            </Card>
           
        </div>
    )
 }
}
export default HeroNew