import React from "react";
import { Route, Switch } from 'react-router-dom'

//components
import SignIn  from './components/Auth/SignIn'
import ForgotPassword  from './components/Auth/ForgotPassword'


//functions 
import {authenticateAsync,forgotPasswordAsync} from './util/auth'

export default () => {

  return (
    <Switch>
      <Route exact path='/signin' render={() => <SignIn onSubmit={authenticateAsync} />} />
      <Route exact path='/forgotpassword' render={() => <ForgotPassword onSubmit={forgotPasswordAsync}/>}/>
    </Switch>
  )
}