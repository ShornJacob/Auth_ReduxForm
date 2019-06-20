import React from "react";
import { signInAsync } from '../../../util/amplifyFunctions'
import SignIn from '../AuthSubComponents/SignIn'
import {bootstrapVariant} from '../../../constants'
import ErrorComponent from '../AuthSubComponents/ErrorComponent'

//message is received incase to display its  not dealth with
export const AmplifySignInError = ({ code, message}) => {

  console.log(code)
  console.log(message)


  let errorMessage , redirectlink , alertVariant

  switch(code) {
    case "UserNotConfirmedException":
      errorMessage = "An email with Confirmation has been sent to the email. Please Confirm using the ";
      redirectlink = "/confirmsignup";
      alertVariant = "danger";
      break;
    case "NotAuthorizedException":
      errorMessage = "Incorrect username or password. To reset password, click ";
      redirectlink = "/forgotpassword";
      alertVariant = "info";
      break;
    default :
        errorMessage = message;
         alertVariant = "danger"  ;      

  }

  return (
    <ErrorComponent variant={alertVariant} message={errorMessage} redirectLink={redirectlink} />
  )

  
  }   
  
export const AmplifySignIn = () => {

    return (
      <SignIn onSubmit={signInAsync} variant={bootstrapVariant} />
    )
  }
