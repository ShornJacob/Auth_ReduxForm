import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { ConfirmSignUp, SignIn, ForgotPasswordSubmit } from 'auth/Links'


//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut


export default ({ formName }) => {

    //console.log(formName)


    switch (formName) {
        case "signUp":
        case "resendSignUp":
            //Success. Confirm user using the code send to email.
            return <Alert variant="info">Success. {' '}<ConfirmSignUp />{' using the code send to email.'}</Alert>

        case "confirmSignUp":
            //Success. Email has been confirmed. Sign in
            return <Alert variant="info">Success. Email has been confirmed.{' '}<SignIn /></Alert>
        case "forgotPassword":
            //Success. Reset Password using code send to email.
            return <Alert variant="info">Success. {" "}<ForgotPasswordSubmit>Reset Password</ForgotPasswordSubmit>{" "}using code send to email.</Alert>
        case "forgotPasswordSubmit":
            //Password has been successfully reset. Sign in.
            return <Alert variant="info">Success. Password has been successfully reset.<SignIn />{"."}</Alert>

        //for warning . expected  adefault cause
        default :
            return <Alert variant="error">Unkowm form submitted<SignIn />{"."}</Alert>
    }

}