import React from "react";
import { Route,   Redirect } from 'react-router-dom'
//import {connectedRoute} from '../../containers/Auth'


//https://reacttraining.com/react-router/web/example/auth-workflow
//Example gets it from fakeAuth
//Modified to get from store State

function PublicRoute({ component: Component, ...rest }) {

    console.log(Component)
    console.log(rest)



    const fakeAuth = false;

    //If  authenicated, ie if fakeAuth is true, redirect
    return (
      <Route
      //  JSX Spread sttributes
        {...rest}
        render={() =>  fakeAuth ? (
            <Redirect
              to={{pathname: "/" }}
            />
          ) : 
          <Component />
        }
      />
    );
  }

  export default PublicRoute