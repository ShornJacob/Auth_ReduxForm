import React from "react";
import {connectedNavBar as NavBar} from './containers/Auth'
import {connectedRoutedApp as RoutedApp} from './containers/Auth'

import PrivateRoute from './components/Auth/PrivateRoute'
import { Route, Switch,  Redirect } from 'react-router-dom'

import AnApp from './AnApp'
import Login from './login'

export default () => {

  //console.log("App")
    return (
      <div>
              <NavBar/>
              {/* <RoutedApp/> */}


              <div>
      

       {/* Routing from privatepath only seems to work properly if in App.js */}
       {/*Problem - Path will be redirected but faled to load the component */}
      <Route exact path='/login' component={Login} />

      <PrivateRoute path="/protected" component={AnApp} />
    </div>
      </div>
    )
}