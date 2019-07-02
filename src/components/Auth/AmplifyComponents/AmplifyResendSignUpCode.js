import React from 'react'
import { resendSignUpAsync } from '../../../util/amplifyAPI'
import ResendSignUp from '../ResendConfirmationCode'
import {bootstrapVariant} from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'

//message is received incase to display its  not dealth with
export const AmplifyResendSignUpCodeError = ({ code, message}) => {

  console.log(code)
  console.log(message)


  let errorMessage , redirectlink , alertVariant

  //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html
        switch(code) {
          //This exception is thrown when a user is not found.
          case "UserNotFoundException":
            errorMessage = "Email not found. You may sign up "
            redirectlink = "/signin"
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


  export const AmplifyResendSignUpCodeSuccess = () => {

    const successMessage = "The confirmation code has been resend . Please confirm "
    const redirectlink = "/confirmemail";
    const alertVariant = "success";

    return (
        <DisplayComponent variant={alertVariant} message={successMessage} redirectLink={redirectlink} />
    )

}
  
export const AmplifyResendSignUpCode = () => {

    return (
      <ResendSignUp onSubmit={resendSignUpAsync} variant={bootstrapVariant} />
    )
  }