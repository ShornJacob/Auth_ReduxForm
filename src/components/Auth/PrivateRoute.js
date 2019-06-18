import React from "react";
import { Route,   Redirect } from 'react-router-dom'
import {connectedRoute} from '../../containers/Auth'


//https://reacttraining.com/react-router/web/example/auth-workflow
//Example gets it from fakeAuth
//Modified to get from store State

function PrivateRoute({ component: Component, ...rest }) {

    console.log(Component)
    console.log(rest)


    const fakeAuth = false;
    return (
      <Route
        {...rest}
        render={props =>  fakeAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute