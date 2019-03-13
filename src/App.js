import React from "react";
import { Route, Switch } from 'react-router-dom'

//components
//used for new user
import SignUp  from './components/Auth/SignUp'
import ConfirmSignUp  from './components/Auth/ConfirmSignUp'
import ResendSignup  from './components/Auth/ResendSignup'


import ForgotPassword  from './components/Auth/ForgotPassword'
import ForgotPasswordSubmit  from './components/Auth/ForgotPasswordSubmit'

import SignIn  from './components/Auth/SignIn'



//functions 
import {signUpAsync, confirmSignUpAsync, resendSignUpAsync,
        signInAsync ,
        forgotPasswordAsync, forgotPasswordSubmitAsync} from './util/auth'

export default () => {

  return (
    <Switch>
      <Route exact path='/signup' render={() => <SignUp onSubmit={signUpAsync} />} />
      <Route exact path='/confirmsignup' render={() => <ConfirmSignUp onSubmit={confirmSignUpAsync}/>}/>
      <Route exact path='/resendsignup' render={() => <ResendSignup onSubmit={resendSignUpAsync}/>}/>

      <Route exact path='/signin' render={() => <SignIn onSubmit={signInAsync} />} />
      
      <Route exact path='/forgotpassword' render={() => <ForgotPassword onSubmit={forgotPasswordAsync}/>}/>
      <Route exact path='/forgotpasswordsubmit' render={() => <ForgotPasswordSubmit onSubmit={forgotPasswordSubmitAsync}/>}/>
    </Switch>
  )
}