import React from "react";
import { connectedNavBar as NavBar } from '../../containers/Auth'
import { connectedPublicRoute as PublicRoute } from '../../containers/Auth'
// import {connectedRoutedApp as RoutedApp} from '../../containers/Auth'

// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'




import { AmplifySignIn } from './AmplifyComponents/AmplifySignIn'





//import {bootstrapVariant} from '../../constants'

import { Route } from 'react-router-dom'


import Landing from "../Landing";





export default () => {

  //generic function that checks authetication and dispatches action for login
 // checkCurrentAuthentication()

  return (
    <div>
      <NavBar />
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/signin' component={AmplifySignIn} />
    </div>

  )
}