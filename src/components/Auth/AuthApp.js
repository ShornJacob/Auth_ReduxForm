import React from "react";
import { connectedNavBar as NavBar } from '../../containers/Auth'
import { connectedPublicRoute as PublicRoute } from '../../containers/Auth'
import { AmplifySignIn } from './AmplifyComponents/AmplifySignIn'
import { Route } from 'react-router-dom'
import Landing from "../Landing";

export default () => {
  return (
    <div>
      <NavBar />
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/signin' component={AmplifySignIn} />
    </div>

  )
}