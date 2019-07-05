import React from "react";
import { connectedNavBar as NavBar,  connectedPublicRoute as PublicRoute } from './containers'
// import {connectedPrivateRoute as PrivateRoute } from './containers'

import {AmplifySignIn} from './routes/SignIn'

import { AmplifySignUp } from './routes/SignUp'
import { AmplifyResendSignUp} from './routes/ResendSignUp'
import { AmplifyConfirmSignUp} from './routes/ConfirmSignUp'

import { AmplifyForgotPassword} from './routes/ForgotPassword'
import { AmplifyForgotPasswordSubmit} from './routes/ForgotPasswordSubmit'

import { Route } from 'react-router-dom'



//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

//Should not contain BrowserRouter ,so to be tested in Memory Router

const Landing = () => <div>Landing</div>

export default () => {
  return (
    <div>
      {/* NavBar displayed always */}
      <NavBar />
      <Route exact path='/' component={Landing} />
      <PublicRoute path="/signin" component={AmplifySignIn} />

      <PublicRoute path='/signup' component={AmplifySignUp} />
      <PublicRoute path='/resendsignup' component={AmplifyResendSignUp} />
      <PublicRoute path='/confirmsignup' component={AmplifyConfirmSignUp} />


      <PublicRoute path='/forgotpassword' component={AmplifyForgotPassword} />
      <PublicRoute path='/forgotpasswordsubmit' component={AmplifyForgotPasswordSubmit} />


    </div>

  )
}