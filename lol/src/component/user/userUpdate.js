import React,{Component} from 'react';
import { Input ,Card,Button} from 'antd';
import './userUpdate.less'
class UserUpdate extends Component{ 
    constructor(props){
        super(props)
        this.state={
            id:props.data._id,
            img:props.data.zhsimg||'',
            name:props.data.zhsname||'',
            rank:props.data.zhsrank||'',
            grd:props.data.zhsgrd||'',
            win:props.data.zhswin||''
        }
    }
    updatedata=()=>{
        let url = `/py/lolzhs/updatezhs?_id=${this.state.id}&zhsimg=${this.state.img}&zhsname=${this.state.name}&zhsrank=${this.state.rank}&zhsgrd=${this.state.grd}&zhswin=${this.state.win}`
        this.$axios.get(url)
        .then((data)=>{
          console.log(data)
          this.props.refresh()
        })
    }
    submit=()=>{
        let file = this.refs.file.files[0]
        let formdata = new FormData()
        formdata.append('hehe',file)
        let config ={
            header:{'Content-Type':'multipart/form-data'}
        }
        this.$axios.post('/py/lolfile/img',formdata,config)
        .then((data)=>{
            this.setState({img:data.data.imgPath})
            alert('上传成功')
        })
       
    }
render(){
    console.log(this,'信息修改')
    return(
        <div>
            <Card className='update'>
                <h1>修改信息</h1>
                <span>召唤师</span>   <Input  value={this.state.name} onChange={
                    (e)=>{
                        this.setState({name:e.target.value})
                    }
                }></Input>
                <span>段位</span>    <Input  value={this.state.rank} onChange={
                    (e)=>{
                        this.setState({rank:e.target.value})
                    }
                }></Input>
                <span>等级</span>    <Input  value={this.state.grd} onChange={
                    (e)=>{
                        this.setState({grd:e.target.value})
                    }
                }></Input>
                <span>胜率</span>    <Input  value={this.state.win} onChange={
                    (e)=>{
                        this.setState({win:e.target.value})
                    }
                }></Input>
                <div>
                    <span>上传图片</span><input type='file' ref ='file'></input>
                    <Button onClick={this.submit}>上传</Button>
                </div>
                <Button onClick={this.updatedata.bind(this)}>提交</Button>
            </Card>
        </div>
    )
 }
}
export default UserUpdate