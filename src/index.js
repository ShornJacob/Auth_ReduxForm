import React from 'react';
import ReactDOM from 'react-dom';
import AuthApp from './components/Auth/AuthApp';
import { Provider } from 'react-redux';
import store from './reducers';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { checkCurrentAuthentication } from './util'
//Provider store to the Routed App

//reducer has created store, so now can dispatch before anything
checkCurrentAuthentication()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);