import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter} from 'react-router-dom'
import {AmplifySignIn} from './routes/SignIn'
import {AmplifySignUp} from './routes/SignUp'
import AuthApp from './'
//imporitng unconnected component for unit testing
import {connectedPublicRoute as PublicRoute} from './containers'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut
 

  //https://github.com/reduxjs/redux/blob/master/docs/recipes/WritingTests.md
  //However, when you import it, you're actually holding the wrapper component returned by connect(), and not the App component itself. 
  //If you want to test its interaction with Redux, this is good news: you can wrap it in a <Provider> with a store created specifically for this unit test

  //https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
  //using MemoryRouter and initial entries

  //https://jestjs.io/docs/en/setup-teardown.html
 //You can also group tests together using a describe block. When they are inside a describe block, the before and after blocks only apply to the tests within that describe block.

//SignIn Component
 describe('PublicRoute Component', () => {

    const middlewares = []
    const mockStore = configureStore(middlewares)
 
     it('when store auth state is false, route \'/signin\' has AmplifySignIn Component', () => {
        // Initialize mockstore with a state
        const initialState = {auth:{AUTHENTICATED: false}}
        const store = mockStore(initialState)
        const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={[ '/signin' ]}>
                 <AuthApp/>
             </MemoryRouter> </Provider>)

        expect(wrapper.find(AmplifySignIn)).toHaveLength(1);
  })


  it('when auth state is true, route \'/signin\' does not have AmplifySignIn Component', () => {
    // Initialize mockstore with a state
    const initialState = {auth:{AUTHENTICATED: true}}
    const store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={[ '/signin' ]}>
             <AuthApp/>
         </MemoryRouter> </Provider>)

    expect(wrapper.find(AmplifySignIn)).toHaveLength(0);
})


//SignUp Component
    
it('when store auth state is false, route \'/signup\' has AmplifySignUp Component', () => {
    // Initialize mockstore with a state
    const initialState = {auth:{AUTHENTICATED: false}}
    const store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={[ '/signup' ]}>
             <AuthApp/>
         </MemoryRouter> </Provider>)

    expect(wrapper.find(AmplifySignUp)).toHaveLength(1);
})

it('when store auth state is false, route \'/signup\' has AmplifySignUp Component', () => {
    // Initialize mockstore with a state
    const initialState = {auth:{AUTHENTICATED: true}}
    const store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><MemoryRouter initialEntries={[ '/signup' ]}>
             <AuthApp/>
         </MemoryRouter> </Provider>)

    expect(wrapper.find(AmplifySignUp)).toHaveLength(0);
})

})