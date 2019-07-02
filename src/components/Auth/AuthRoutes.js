import React from "react";
import { connectedNavBar as NavBar } from '../../containers/Auth'
import { connectedPublicRoute as PublicRoute, connectedPrivateRoute as PrivateRoute } from '../../containers/Auth'

import {AmplifySignIn} from './SignIn'


import { AmplifySignUp } from './AmplifyComponents/AmplifySignUp'
import { AmplifyResendSignUpCode} from './AmplifyComponents/AmplifyResendSignUpCode'
import { AmplifyConfirmSignUpCode} from './AmplifyComponents/AmplifyConfirmSignUpCode'

import { AmplifyResetPasswordRequest} from './AmplifyComponents/AmplifyForgotPassword'
import { AmplifyConfirmResetPassword} from './AmplifyComponents/AmplifyConfirmForgotPassword'

import { Route } from 'react-router-dom'
import Landing from "../Landing";
import {bootstrapVariant} from '../../constants'

import {signinAsync} from '../../util'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

//Should not contain BrowserRouter ,so to be tested in Memory Router

export default () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Route exact path='/' component={Landing} />
      <PublicRoute path="/signin" component={AmplifySignIn} />

      <PublicRoute path='/signup' component={AmplifySignUp} />
      <PublicRoute path='/resendsignup' component={AmplifyResendSignUpCode} />
      <PublicRoute path='/confirmsignup' component={AmplifyConfirmSignUpCode} />

      <PublicRoute path='/forgotpassword' component={AmplifyResetPasswordRequest} />
      <PublicRoute path='/forgotpasswordsubmit' component={AmplifyConfirmResetPassword} />

       {/* Reset needs to be accessible loeed in or not */}
      <Route path='/resetpassword' component={AmplifyConfirmResetPassword} />
    </div>

  )
}