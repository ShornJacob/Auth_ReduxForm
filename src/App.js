import React from "react";
import { Route, Switch } from 'react-router-dom'

//components
import SignIn  from './components/Auth/SignIn'


//functions 
import {authenticateAsync} from './util/auth'

export default () => {

  return (
    <Switch>
      <Route exact path='/signin' render={() => <SignIn onSubmit={authenticateAsync} />} />
    </Switch>
  )
}