import React from 'react';
import ReactDOM from 'react-dom';
import AuthRoutes from 'auth'
import { Provider } from 'react-redux';
import store from './reducers';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { checkCurrentAuthentication } from './auth/util/index.js'
//Provider store to the Routed App

//reducer has created store, so now can dispatch before anything
checkCurrentAuthentication()

ReactDOM.render(
  <Provider store={store}>
    {/* A <Router> may have only one child element */}
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);