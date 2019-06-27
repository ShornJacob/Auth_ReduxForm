import React from "react";
import { Route,   Redirect } from 'react-router-dom'


//https://reacttraining.com/react-router/web/example/auth-workflow
//Example gets it from fakeAuth
//Modified to get from store State

//PrivateROut is an HOC

function PrivateRoute({ authenticated, ownProps }) {

    let {component:Component, ...rest} = ownProps

    // console.log(authenticated)
    // console.log(Component)
    // console.log(rest)

     //PrivateRoute, If  not authenicated ie  false, redirect
    return (
      <Route
      //  JSX Spread sttributes to get path for Route
        {...rest}
        render={() =>  authenticated ? (
            <Component />
          ) : 
          <Redirect
              to={{pathname: "/" }}
            />
        }
      />
    );
  }

  export default PrivateRoute