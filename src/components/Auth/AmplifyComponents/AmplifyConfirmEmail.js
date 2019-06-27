import React from "react";
import { confirmSignUpAsync } from '../../../util/amplifyFunctions'
import ConfirmEmail from '../AuthSubComponents/ConfirmEmail'
import {bootstrapVariant} from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'

//message is received incase to display its  not dealth with
export const AmplifyConfirmEmailError = ({ code, message}) => {

  console.log(code)
  console.log(message)


  let errorMessage , redirectlink , alertVariant

   //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html
        switch(code) {
          //This exception is thrown if a code has expired.
          case "ExpiredCodeException":
            errorMessage = "The confirmation code has expired. You can resend another code "
            redirectlink = "/resendcode"
            alertVariant = "info"
            break
    default :
        errorMessage = message;
         alertVariant = "danger"  ;      

  }

  return (
    <DisplayComponent variant={alertVariant} message={errorMessage} redirectLink={redirectlink} />
  )

  
  }   


  export const AmplifyConfirmEmailSuccess = () => {

    const successMessage = "The email has been successfully confirmed. Please sign in "
    const redirectlink = "/signin";
    const alertVariant = "success";

    return (
        <DisplayComponent variant={alertVariant} message={successMessage} redirectLink={redirectlink} />
    )

}
  
export const AmplifyConfirmEmail = () => {

    return (
      <ConfirmEmail onSubmit={confirmSignUpAsync} variant={bootstrapVariant} />
    )
  }