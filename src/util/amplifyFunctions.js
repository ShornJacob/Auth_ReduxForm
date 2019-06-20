import Auth from '@aws-amplify/auth'
import awsExports from '../aws-exports'
import {
    signUpSuccess, confirmSignUpSuccess, resendSignUpSuccess,
    signInSuccess, forgotPasswordSuccess, forgotPasswordSubmitSuccess,
    signOutSuccess,currentlyAuthenticated
} from './amplifySuccess'
import {
    signUpError, confirmSignUpError, resendSignUpError,
    signInError, forgotPasswordError, forgotPasswordSubmitError,
    signOutError
} from './amplifyErrors'

//aws-amplify is decalrative
//https://aws.amazon.com/about-aws/whats-new/2017/11/introducing-aws-amplify-a-declarative-javascript-library-for-cloud-development-with-mobile-or-web-applications/
//https://aws-amplify.github.io/amplify-js/api/
//https://github.com/aws-amplify/amplify-js/wiki

//difference with aws sdk
//https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html#Usage_and_Getting_Started
//For browser-based web, mobile and hybrid apps, you can use AWS Amplify Library which extends the AWS SDK and provides an easier and declarative interface

//config requires userPoolId and userPoolWebClientId
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

//check if authentication exists already

export const currentAuthenticatedUserAsync = () => {

    //https://aws-amplify.github.io/docs/js/authentication#retrieve-current-authenticated-user
return Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then((response) => {
    currentlyAuthenticated(response)
}).catch((error) => {
    console.log(error)
})
    
}
