import React,{Component} from 'react';
import {Card,Input} from 'antd'
import './userAdd.less'

class UserAdd extends Component{ 
render(){
    return(
        <div className='userAdd-box'>
            <Card className="userAdd-content">
                <h1>召唤师信息</h1>
                <div className="userAdd-list">
                  <input placeholder="召唤师"/>
                  <input placeholder="段位"/>
                  <input placeholder="等级"/>
                  <input placeholder="胜率"/>
                  <div>
                     <input type="file" />
                     <button>上传</button>
                     <img src="" alt=""/>
                  </div> 
                  </div>    
            </Card>
        </div>
    )
 }
}
export default UserAdd