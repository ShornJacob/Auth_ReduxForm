import React from 'react';
import ReactDOM from 'react-dom';
import AuthRoutes from 'auth'
import { Provider } from 'react-redux';
import store from './reducers';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { currentAuthenticatedUserAsync } from 'auth/amplify'
//Provider store to the Routed App

//reducer has created store, so now can dispatch before anything
currentAuthenticatedUserAsync()

ReactDOM.render(
  <Provider store={store}>
    {/* A <Router> may have only one child element */}
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);