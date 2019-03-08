import Auth from '../../aws-exports';
import {signInSuccess,forgotPasswordSuccess} from './success'
import  {signInError,forgotPasswordError} from './error'

export const authenticateAsync = (values) => {

    //console.log(values)

    return Auth.signIn(values.email, values.password).then((response) => {
        signInSuccess(response)
    }).catch((error) => {
        signInError(error)
    })
}


export const forgotPasswordAsync = (values) => {

    console.log(values)

    return Auth.forgotPassword(values.email).then((response) => {
        forgotPasswordSuccess(response)
    }).catch((error) => {
        forgotPasswordError(error)
    })
}

