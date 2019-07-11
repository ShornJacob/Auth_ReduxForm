import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { ConfirmSignUp , ResendSignUp } from 'auth/Links'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

//resendSignUp has no visible link. It is redirected. So exceptions the need a resendSignUp are tested here
//which is ExpiredCodeException

export default function ErrorAlert({ code, message }) {


    console.log(code)
    console.log(message)

    switch (code) {

        //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/Welcome.html



        case "UserNotConfirmedException":
            return <Alert variant="info">{message}&nbsp;<ConfirmSignUp text={"Confirm user here."} /></Alert>
        case "ExpiredCodeException":
            return <Alert variant="info">{message}&nbsp;<ResendSignUp/></Alert>
        //default for all other Error codes
        default:
            return <Alert variant="danger">{message}</Alert>

    }

}