import React from "react";
import { Route,   Redirect } from 'react-router-dom'


//https://reacttraining.com/react-router/web/example/auth-workflow
//Example gets it from fakeAuth
//Modified to get from store State

function PublicRoute({ authenticated, ownProps }) {

    let {component:Component, ...rest} = ownProps

    // console.log(authenticated)
    // console.log(Component)
    // console.log(rest)

    //Public Route, If  not authenicated ie  true, redirect
    return (
      <Route
      //  JSX Spread sttributes to get path for Route
        {...rest}
        render={() =>  authenticated ? (
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