import Auth from '@aws-amplify/auth'
import awsExports from '../../aws-exports'
import {signUpSuccess, confirmSignUpSuccess,resendSignUpSuccess,
        signInSuccess,forgotPasswordSuccess, forgotPasswordSubmitSuccess,
        signOutSuccess } from './success'
import  {signUpError, confirmSignUpError,resendSignUpError,
         signInError,forgotPasswordError, forgotPasswordSubmitError,
         signOutError} from './error'

Auth.configure(awsExports)
//for registering new user
export const signUpAsync = (values) => {

    //console.log(values)

    return Auth.signUp(values.email, values.password).then((response) => {
        signUpSuccess(response)
    }).catch((error) => {
        signUpError(error)
    })
}

export const confirmSignUpAsync = (values) => {
    // console.log(values)
 
     return Auth.confirmSignUp(values.email, values.code).then((response) => {
         confirmSignUpSuccess(response)
     }).catch((error) => {
         confirmSignUpError(error)
     })
 }


 export const resendSignUpAsync = (values) => {
    // console.log(values)
 
     return Auth.resendSignUp(values.email).then((response) => {
        resendSignUpSuccess(response)
     }).catch((error) => {
        resendSignUpError(error)
     })
 }
 


export const signInAsync = (values) => {

    //console.log(values)

    return Auth.signIn(values.email, values.password).then((response) => {
        signInSuccess(response)
    }).catch((error) => {
        signInError(error)
    })
}


export const forgotPasswordAsync = (values) => {

    //console.log(values)

    return Auth.forgotPassword(values.email).then((response) => {
        forgotPasswordSuccess(response)
    }).catch((error) => {
        forgotPasswordError(error)
    })
}


export const forgotPasswordSubmitAsync = (values) => {

    //console.log(values)

    return Auth.forgotPasswordSubmit(values.email).then((response) => {
        forgotPasswordSubmitSuccess(response)
    }).catch((error) => {
        forgotPasswordSubmitError(error)
    })
}

export const signOutAsync = () => {

    //console.log(values)

    return Auth.signOut().then((response) => {
        signOutSuccess(response)
    }).catch((error) => {
        signOutError(error)
    })
}
