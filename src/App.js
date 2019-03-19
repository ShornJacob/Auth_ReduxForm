import React from "react";
import {connectedNavBar as NavBar} from './containers/AuthContainer'
import {connectedRoutedApp as RoutedApp} from './containers/AuthContainer'


export default () => {
    return (
      <div>
              <NavBar/>
              <RoutedApp/>
      </div>
    )
}