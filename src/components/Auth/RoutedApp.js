import React from "react";
import { Route, Switch,  Redirect } from 'react-router-dom'

//components
//used for new user
import SignUp from './SignUp'
import ConfirmSignUp from './ConfirmSignUp'
import ResendSignup from './ResendSignup'


import ForgotPassword from './ForgotPassword'
import ForgotPasswordSubmit from './ForgotPasswordSubmit'

import SignIn from './SignIn'

//others
import AnApp from '../../AnApp'

//functions 
import {
  signUpAsync, confirmSignUpAsync, resendSignUpAsync,
  signInAsync,
  forgotPasswordAsync, forgotPasswordSubmitAsync
} from '../../util/auth'

export default ({ authenticated, authenticating, email }) => {

  // console.log(authenticated)
  // console.log(authenticating)
  // console.log(email)


  const routesWhenNotAuthenticated = (
    <Switch>
      <Route exact path='/signup' render={() => <SignUp onSubmit={signUpAsync} />} />
      <Route exact path='/confirmsignup' render={() => <ConfirmSignUp onSubmit={confirmSignUpAsync} />} />
      <Route exact path='/resendsignup' render={() => <ResendSignup onSubmit={resendSignUpAsync} />} />

      <Route exact path='/signin' render={() => <SignIn onSubmit={signInAsync} />} />

      <Route exact path='/forgotpassword' render={() => <ForgotPassword onSubmit={forgotPasswordAsync} />} />
      <Route exact path='/forgotpasswordsubmit' render={() => <ForgotPasswordSubmit onSubmit={forgotPasswordSubmitAsync} />} />
    </Switch>
  )


  const routesWhenAuthenticated = (
    <Switch>
      <Route exact path='/anapp' component={AnApp} />
      <Route exact path="/signin" render={() => (<Redirect to="/anapp" />)} />
    </Switch>
  )

  return (
    <React.Fragment>
      {authenticated ? routesWhenAuthenticated : routesWhenNotAuthenticated}
    </React.Fragment>

  )
}