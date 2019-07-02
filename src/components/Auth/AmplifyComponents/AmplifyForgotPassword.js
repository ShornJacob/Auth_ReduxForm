import React from 'react'
import { forgotPasswordAsync } from '../../../util/amplifyAPI'
import ResetPassword from '../ResetPasswordRequest'
import { bootstrapVariant } from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'

//message is received incase to display its  not dealth with
export const AmplifyResetPasswordRequestError = ({ code, message }) => {

    console.log(code)
    console.log(message)


    let errorMessage, redirectlink, alertVariant

    //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
    switch (code) {
        //This exception is thrown when a user is not found.
        case "UserNotFoundException":
            errorMessage = "Email not found. You may sign up "
            redirectlink = "/signup"
            alertVariant = "info"
            break;

        //This exception is thrown when a user exceeds the limit for a requested AWS resource.
        case "LimitExceededException":
            errorMessage = "Attempt limit for this user has exceeded, please try after some time. "
            alertVariant = "danger"
            break;

        default:
            errorMessage = message;
            alertVariant = "danger";

    }

    return (
        <DisplayComponent variant={alertVariant} message={errorMessage} redirectLink={redirectlink} />
    )


}


export const AmplifyResetPasswordRequestSuccess = () => {

    const successMessage = "A code has been sent to the Email. Please confirm the email and code "
    const redirectlink = "/confirmreset";
    const alertVariant = "success";

    return (
        <DisplayComponent variant={alertVariant} message={successMessage} redirectLink={redirectlink} />
    )

}

export const AmplifyResetPasswordRequest = () => {

    return (
        <ResetPassword onSubmit={forgotPasswordAsync} variant={bootstrapVariant} />
    )
}


