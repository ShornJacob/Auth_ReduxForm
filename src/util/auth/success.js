import store from '../../reducers'
import {authenticate} from '../../actions'


export const signInSuccess = (response) => {

    console.log("signInSuccess")

    console.log(response)

    const { jwtToken,payload } = response.signInUserSession.idToken

    const {auth_time,email} = payload

    console.log(jwtToken,auth_time,email)

    store.dispatch(authenticate(email,jwtToken))

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


