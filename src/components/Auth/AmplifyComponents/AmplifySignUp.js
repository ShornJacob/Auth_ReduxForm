import React from "react";
import { signUpAsync } from '../../../util/amplifyFunctions'
import SignUp from '../AuthSubComponents/SignUp'
import { bootstrapVariant } from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'

//message is received incase to display its  not dealth with
export const AmplifySignUpError = ({ code, message }) => {

    console.log(code)
    console.log(message)

    let errorMessage, redirectlink, alertVariant

    //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
    switch (code) {
        //This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.
        case "UsernameExistsException":
            errorMessage = "This email is already registered. You may reset your password ";
            redirectlink = "/resetpassword";
            alertVariant = "info";
            break;

        default:
            errorMessage = message;
            alertVariant = "danger";
    }

    return (
        <DisplayComponent variant={alertVariant} message={errorMessage} redirectLink={redirectlink} />
    )

}



export const AmplifySignUpSuccess = () => {

    const successMessage = "A confirmation code has been sent to the Email . Please confirm "
    const redirectlink = "/confirmsignup";
    const alertVariant = "success";

    return (
        <DisplayComponent variant={alertVariant} message={successMessage} redirectLink={redirectlink} />
    )

}

export const AmplifySignUp = () => {

    return (
        <SignUp onSubmit={signUpAsync} variant={bootstrapVariant} />
    )
}
