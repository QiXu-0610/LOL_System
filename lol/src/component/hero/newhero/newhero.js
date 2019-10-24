import React,{Component} from 'react';
import { Card, Select ,Input,Upload,Button} from 'antd';

// const { Option } = Select;
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
         type_id:''

     }
 }


 upload=()=>{
    let file=this.refs.file.files[0]
    let formdata=new FormData()
    formdata.append('hehe',file)
//     console.log(this.refs.file.files)
//     console.log(formdata.get('hehe'))
//     let config = {
//       headers:{'Content-Type':'multipart/form-data'}
//    };
    this.$axios.post('/py/lolfile/img',formdata)
    .then((data)=>{
      console.log(data.data.imgPath)
      this.setState({img:data.data.imgPath})
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
          })

      }else{
          alert('请填写完整信息')
      }
  }
render(){
    return(
        <div className='newHero'>
            <Card>
           <h4>新英雄</h4>
            <label>英雄名称</label>
            <Input type='text' value ={this.state.name} onChange={
                (e)=>{
                    this.setState({name:e.target.value})
                 }
                }/>
            <br/>
            <label>英雄描述</label>
            <Input type='text' value ={this.state.info} onChange={
                (e)=>{
                    this.setState({info:e.target.value})
                 }
                }/>
            <br/>
            <label>英雄类别</label>
            <Input type='text' value ={this.state.type_id} onChange={
            (e)=>{
                this.setState({type_id:e.target.value,type:match[e.target.value]})
                }
            }/>
      
        
       
            <br/>
            <input type='file' ref = 'file'></input>
            <Button onClick={this.upload}>上传</Button>
        
    
            <Button onClick = {this.submit}>提交</Button>

            </Card>
 
        </div>
    )
 }
}
export default HeroNew