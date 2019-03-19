import React from "react";
import { Route, Switch } from 'react-router-dom'

//components
//used for new user
import SignUp  from './SignUp'
import ConfirmSignUp  from './ConfirmSignUp'
import ResendSignup  from './ResendSignup'


import ForgotPassword  from './ForgotPassword'
import ForgotPasswordSubmit  from './ForgotPasswordSubmit'

import SignIn  from './SignIn'



//functions 
import {signUpAsync, confirmSignUpAsync, resendSignUpAsync,
        signInAsync ,
        forgotPasswordAsync, forgotPasswordSubmitAsync} from '../../util/auth'

export default ({auth}) => {

  const routesWhenNotAuthenticated = (
    <Switch>
    <Route exact path='/signup' render={() => <SignUp onSubmit={signUpAsync} />} />
    <Route exact path='/confirmsignup' render={() => <ConfirmSignUp onSubmit={confirmSignUpAsync}/>}/>
    <Route exact path='/resendsignup' render={() => <ResendSignup onSubmit={resendSignUpAsync}/>}/>

    <Route exact path='/signin' render={() => <SignIn onSubmit={signInAsync} />} />
    
    <Route exact path='/forgotpassword' render={() => <ForgotPassword onSubmit={forgotPasswordAsync}/>}/>
    <Route exact path='/forgotpasswordsubmit' render={() => <ForgotPasswordSubmit onSubmit={forgotPasswordSubmitAsync}/>}/>
  </Switch>
  )

  return (
    <React.Fragment>
         {routesWhenNotAuthenticated}
    </React.Fragment>

  )
}