import React from 'react';
import Login from './component/login/loadable'
import Admin from './component/admin'
import loadable  from './utils/loadCcomponent'
import HeroList from './component/hero/heroList'
// import HeroTop from './component/hero/heroTop'
// import HeroJug from './component/hero/heroJug'
// import HeroMid from './component/hero/heroMid'
// import HeroAdc from './component/hero/heroAdc'
// import HeroSup from './component/hero/heroSup'


import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
const UserAdd = loadable(()=>import('./component/user/userAdd'))
const UserList = loadable(()=>import('./component/user/userList'))


const HeroTop = loadable(()=>import('./component/hero/heroTop'))
const HeroJug = loadable(()=>import('./component/hero/heroJug'))
const HeroMid = loadable(()=>import('./component/hero/heroMid'))
const HeroAdc = loadable(()=>import('./component/hero/heroAdc'))
const HeroSup = loadable(()=>import('./component/hero/heroSup'))

const NewHero = loadable(()=>import('./component/hero/newhero/newhero'))

const Set = loadable(()=>import('./component/setting/set'))
const Qt = loadable(()=>import('./component/setting/qt'))


class RootRouter extends React.Component{
    
    render(){
        return(
          <HashRouter>
             

              <Switch>
                  <Redirect exact from='/' to='/login'></Redirect>
                  <Route exact path='/login' component={Login}></Route>
                 
                  
                  <Route path='/admin'  render={()=>{
                                return(
                                <Admin>
                                    <Route path='/admin/user/add' component ={UserAdd}></Route> 

                                     <Route exact path='/admin/user/list' component ={UserList}></Route> 

 
                                     <Route  path='/admin/hero/list/qb' component={HeroList}></Route>
                                     <Route path='/admin/hero/list/top' component={HeroTop}></Route>
                                     <Route path='/admin/hero/list/jug' component={HeroJug}></Route>
                                     <Route path='/admin/hero/list/mid' component={HeroMid}></Route>
                                     <Route path='/admin/hero/list/adc' component={HeroAdc}></Route>
                                     <Route path='/admin/hero/list/sup' component={HeroSup}></Route>

                                     <Route path='/admin/hero/add' component={NewHero}></Route>
                                     <Route  path='/admin/setting' component={Set}></Route>
                                     <Route  path='/admin/qt' component={Qt}></Route>
                                </Admin> 
                                )
                            }}></Route>

                  
              </Switch>
          </HashRouter>

        )
    }
}
export default RootRouter