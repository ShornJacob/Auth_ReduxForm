import React from "react";
import { signInAsync } from '../../../util/amplifyFunctions'
import SignIn from '../AuthSubComponents/SignIn'
import {bootstrapVariant} from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'

//message is received incase to display its  not dealth with
export const AmplifySignInError = ({ code, message}) => {

  console.log(code)
  console.log(message)


  let errorMessage , redirectlink , alertVariant

  //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html
  switch(code) {
    //This exception is thrown when a user is not confirmed successfully.
    case "UserNotConfirmedException":
      errorMessage = "An email with a confirmation code has been sent to the email. Please confirm the email and code  "
      redirectlink = "/confirmemail"
      alertVariant = "info"
      break;
   //This exception is thrown when a user is not found.
    case "UserNotFoundException":
        errorMessage = "That username does not exist. sign up "
        redirectlink = "/signup"
        alertVariant = "danger"
        break;
    //This exception is thrown when a user is not authorized.
    //In this instance, when password is wrong   
    case "NotAuthorizedException":
            errorMessage = "Incorrect username or password. You may reset a password  "
            redirectlink = "/resetpassword"
            alertVariant = "danger"
            break;
    default :
        errorMessage = message;
         alertVariant = "danger"     

  }

  return (
    <DisplayComponent variant={alertVariant} message={errorMessage} redirectLink={redirectlink} />
  )

  
  }   
  
export const AmplifySignIn = () => {

    return (
      <SignIn onSubmit={signInAsync} variant={bootstrapVariant} />
    )
  }
