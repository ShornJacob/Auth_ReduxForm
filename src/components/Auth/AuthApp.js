import React from "react";
import {connectedNavBar as NavBar} from '../../containers/Auth'
// import {connectedRoutedApp as RoutedApp} from '../../containers/Auth'

// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'





import {AmplifySignIn} from './AmplifyComponents/AmplifySignIn'

import {
  signUpAsync, confirmSignUpAsync, resendSignUpAsync,
  signInAsync,
  forgotPasswordAsync, forgotPasswordSubmitAsync
} from './AmplifyFunctions.js/index.js'



//import {bootstrapVariant} from '../../constants'

import { Route } from 'react-router-dom'

import AnApp from '../../AnApp'




export default () => {



    return (
      <div>
              <NavBar/>
              {/* <RoutedApp/> */}


              <div>
      

       {/* Routing from privatepath only seems to work properly if in App.js */}
       {/*Problem - Path will be redirected but faled to load the component */}

      

      {/* <PublicRoute path='/signin' render={() => <SignIn onSubmit={signInAsync} variant={bootstrapVariant} />} /> */}
      <Route path='/' component={AnApp} />
      <Route path='/signin' component={AmplifySignIn} />
      

       {/* <PublicRoute path='/signin' component={AmplifySignIn}/> */}
      {/* <PrivateRoute path="/protected" component={AnApp} /> */}

      
    </div>
      </div>
    )
}