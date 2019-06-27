import React from "react";
import { connectedNavBar as NavBar } from '../../containers/Auth'
import { connectedPublicRoute as PublicRoute, connectedPrivateRoute as PrivateRoute } from '../../containers/Auth'
import { AmplifySignIn } from './AmplifyComponents/AmplifySignIn'
import { AmplifySignUp } from './AmplifyComponents/AmplifySignUp'
import { AmplifyConfirmEmail} from './AmplifyComponents/AmplifyConfirmEmail'
import { AmplifyResetPassword} from './AmplifyComponents/AmplifyResetPassword'
import { AmplifyResendSignUpCode} from './AmplifyComponents/AmplifyResendSignUpCode'
import { Route } from 'react-router-dom'
import Landing from "../Landing";

export default () => {
  return (
    <div>
      <NavBar />
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/signin' component={AmplifySignIn} />
      <PublicRoute path='/signup' component={AmplifySignUp} />
      <PublicRoute path='/resendsignup' component={AmplifyResendSignUpCode} />
      <PublicRoute path='/confirmemail' component={AmplifyConfirmEmail} />
       {/* Reset needs to be accessible loeed in or not */}
      <Route path='/resetpassword' component={AmplifyResetPassword} />
    </div>

  )
}