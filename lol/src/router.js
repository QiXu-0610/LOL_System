import React from 'react';
import Login from './component/login/loadable'
import Admin from './component/admin'
import loadable  from './utils/loadCcomponent'


import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
const UserList = loadable(()=>import('./component/user/userList'))
const UserAdd = loadable(()=>import('./component/user/userAdd'))

class RootRouter extends React.Component{
    
    render(){
        return(
          <HashRouter>
             

              <Switch>
                  <Redirect exact from='/' to='/login'></Redirect>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/admin'  render={()=>{
                                return(
                                <Admin>
                                     <Route path='/admin/user/userList' component ={UserList}></Route> 
                                     <Route path='/admin/user/userAdd' component ={UserAdd}></Route> 
                                     {/* <Route path='/admin/hero/' component ={Hero}></Route>  */}

                                </Admin> 
                                )
                            }}></Route>

                  
              </Switch>
          </HashRouter>

        )
    }
}
export default RootRouter