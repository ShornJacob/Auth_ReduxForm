import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { SignUp, ConfirmSignUp, ForgotPassword, SignIn, ForgotPasswordSubmit } from 'auth/Links'


//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut



const messages = {
    signUp: "using code sent to Email.",
    confirmSignUp: "Email has been Confirmed.",
    forgotPasswordSubmit: "Password has been successfully reset.",
}
export default ({ formName }) => {

    let successAlert
    console.log(formName)


    switch (formName) {
        case "signUp":
            return <Alert variant="info"><ConfirmSignUp text={"Confirm user"}/>&nbsp;{messages.signUp}&nbsp;</Alert>
        case "confirmSignUp":
            return <Alert variant="info">{messages.confirmSignUp}{" "}<SignIn /></Alert>
        case "forgotPassword":
            return <Alert variant="info">Success. {" "}<ForgotPasswordSubmit>Reset Password</ForgotPasswordSubmit>{" "}using code.</Alert>
        case "forgotPasswordSubmit":
            return <Alert variant="info">{messages.forgotPasswordSubmit}&nbsp;<SignIn/></Alert>
    }

}