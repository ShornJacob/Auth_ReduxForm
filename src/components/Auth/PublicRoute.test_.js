import { mount} from 'enzyme';
import React from 'react';
import {connectedPrivateRoute as PrivateRoute} from '../../containers/Auth'

import configureStore from 'redux-mock-store'

import { Provider } from 'react-redux';
import { BrowserRouter, Redirect } from 'react-router-dom'



//THESE TESTS FAIl - TODO

//mock store
//https://github.com/dmitry-zaets/redux-mock-store
// create any initial state needed

const mockStore = configureStore()
const authStateFalse = {auth: {AUTHENTICATED: false}}; 
const authStateTrue = {auth: {AUTHENTICATED: true}};
const AComponent = () => <div>AComponent</div>

//ReactWrapper: The wrapper instance around the rendered output.
//https://airbnb.io/enzyme/docs/api/mount.html
//https://airbnb.io/enzyme/docs/api/ReactWrapper/exists.html



  test('Private path renders a Redirect when auntentication is false', () => {

    const store = mockStore(authStateFalse)

    const props = {path:"/aprivatepath" ,component:<AComponent/>};

    let enzymeWrapper = mount(<Provider store={store}>
                                    <BrowserRouter>
                                    <PrivateRoute path="/aprivatepath" component={AComponent}/>
                                    </BrowserRouter>                              
                          </Provider>);


    expect(enzymeWrapper.exists(Redirect)).toBe(true)
  });


  test('Private path renders the component when auntentication is true', () => {

    const store = mockStore(authStateTrue)

    const props = {path:"/aprivatepath" ,component:<AComponent/>};

    let enzymeWrapper = mount(<Provider store={store}>
                                    <BrowserRouter>
                                    <PrivateRoute path="/aprivatepath" component={AComponent}/>
                                    </BrowserRouter>                              
                          </Provider>);


    expect(enzymeWrapper.exists(AComponent)).toBe(true)
  });



