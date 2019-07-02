import React from 'react'
import { forgotPasswordSubmitAsync } from '../../../util/amplifyAPI'
import ConfirmResetPassword from '../ConfirmResetPassword'
import {bootstrapVariant} from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'

//message is received incase to display its  not dealth with
export const AmplifyConfirmSignUpError = ({ code, message}) => {

  console.log(code)
  console.log(message)


  let errorMessage , redirectlink , alertVariant

  
        switch(code) {
          //This exception is thrown if a code has expired.
          case "ExpiredCodeException":
            errorMessage = "The confirmation code has expired. You can resend another code "
            redirectlink = "/resendsignupcode"
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


  export const AmplifyConfirmResetPasswordSuccess = () => {

    const successMessage = "The email has been successfully confirmed. Please sign in "
    const redirectlink = "/signin";
    const alertVariant = "success";

    return (
        <DisplayComponent variant={alertVariant} message={successMessage} redirectLink={redirectlink} />
    )

}
  
export const AmplifyConfirmResetPassword = () => {

    return (
      <yConfirmResetPassword onSubmit={forgotPasswordSubmitAsync} variant={bootstrapVariant} />
    )
  }