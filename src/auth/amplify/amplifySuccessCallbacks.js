import store from '../../reducers'
import {loginSuccess,logoutSuccess} from 'auth/actions'


export const signInSuccess = (response) => {

    console.log("signInSuccess")

    //console.log(response)

    const { jwtToken,payload } = response.signInUserSession.idToken

    const {email} = payload

    //console.log(jwtToken,auth_time,email)

    store.dispatch(loginSuccess(email,jwtToken))

}


export const signUpSuccess = (response) => {

    console.log("signUpSuccess")

    

    console.debug(response)
    
    //dispatch on Success
    //store.dispatch(authenticate()
}

export const confirmSignUpSuccess = (error) => {

    console.log("confirmSignUpSuccess")

}

export const resendSignUpSuccess = (error) => {

    console.log("resendSignUpSuccess")

}




export const forgotPasswordSuccess = (response) => {

    console.log("forgotPasswordSuccess")

}

export const forgotPasswordSubmitSuccess = (response) => {

    console.log("forgotPasswordSuccess")

}


export const signOutSuccess = (response) => {

    console.log("signOutSuccess")

    store.dispatch(logoutSuccess())

}

export const currentlyAuthenticated = (response) => {

    //console.log(response)

    const { jwtToken,payload } = response.signInUserSession.idToken

    const {email} = payload

    //console.log(jwtToken,email)

    //calls login action
    store.dispatch(loginSuccess(email,jwtToken))

}



