import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'
import {AmplifySignIn} from './SignIn'
import AuthRoutes from './AuthRoutes'
//imporitng unconnected component for unit testing
import {connectedPublicRoute as PublicRoute} from '../../containers/Auth/'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'


 

  //https://github.com/reduxjs/redux/blob/master/docs/recipes/WritingTests.md
  //However, when you import it, you're actually holding the wrapper component returned by connect(), and not the App component itself. 
  //If you want to test its interaction with Redux, this is good news: you can wrap it in a <Provider> with a store created specifically for this unit test

  //https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
  //using MemoryRouter and initial entries

  //https://jestjs.io/docs/en/setup-teardown.html
 //You can also group tests together using a describe block. When they are inside a describe block, the before and after blocks only apply to the tests within that describe block.


 describe('PublicRoute Component', () => {

    const middlewares = []
    const mockStore = configureStore(middlewares)
 
     it('when store auth state is false, route \'/signin\' has AmplifySignIn Component', () => {
        // Initialize mockstore with a state
        const initialState = {auth:{AUTHENTICATED: false}}
        const store = mockStore(initialState)
        const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={[ '/signin' ]}>
                 <AuthRoutes/>
             </MemoryRouter> </Provider>)

        expect(wrapper.find(AmplifySignIn)).toHaveLength(1);
  })


  it('when auth state is true, route \'/signin\' does not have AmplifySignIn Component', () => {
    // Initialize mockstore with a state
    const initialState = {auth:{AUTHENTICATED: true}}
    const store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={[ '/signin' ]}>
             <AuthRoutes/>
         </MemoryRouter> </Provider>)

    expect(wrapper.find(AmplifySignIn)).toHaveLength(0);
})
})


