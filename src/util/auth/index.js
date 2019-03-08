import Auth from '../../aws-exports';
import {signInSuccess} from './success'
import  {signInError} from './error'

export const authenticateAsync = (values) => {

    //console.log(values)

    return Auth.signIn(values.email, values.password).then((response) => {
        signInSuccess(response)
    }).catch((error) => {
        signInError(error)
    })
}
