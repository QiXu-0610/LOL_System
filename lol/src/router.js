import React from 'react';
import Login from './component/login'
import Admin from './component/admin'

import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'

class RootRouter extends React.Component{
    render(){
        return(
          <HashRouter>


              <Switch>
                  <Redirect exact from='/' to='/login'></Redirect>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/admin' component={Admin}></Route>

                  
              </Switch>
          </HashRouter>

        )
    }
}
export default RootRouter