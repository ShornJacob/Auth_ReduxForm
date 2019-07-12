import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { ConfirmSignUp, ResendSignUp, ForgotPassword } from 'auth/Links'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

//resendSignUp has no visible link. It is redirected. So exceptions that need a resendSignUp are tested here
//which is ExpiredCodeException

export default function ErrorAlert({ code, message }) {


    console.log(code)
    console.log(message)

    switch (code) {

        //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/Welcome.html



        case "UserNotConfirmedException":
            //Error. User is not confirmed. Confirm user here.   
            return <Alert variant="info">{'Error. ' + message}&nbsp;<ConfirmSignUp>Confirm user here.</ConfirmSignUp></Alert>


        case "ExpiredCodeException":
            //Error. Invalid code provided, please request a code again. Resend for new user or Reset Password for existing user.            
            return <Alert variant="info">{'Error. ' + message + ' '}<ResendSignUp>Resend for new user</ResendSignUp>{' or '}<ForgotPassword>Reset Password for existing user.</ForgotPassword></Alert>



        //default for all other Error codes
        default:
            return <Alert variant="danger">{message}</Alert>

    }

}