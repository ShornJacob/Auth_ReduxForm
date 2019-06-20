import React from "react";
import {signInAsync} from '../AmplifyFunctions.js'
import SignIn from '../AuthSubComponents/SignIn'
import {bootstrapVariant} from '../../../constants'
import ErrorComponent from '../AuthSubComponents/ErrorComponent'

//message is received incase to desplay its not dealth with
const AmplifySignInError = ({ code, message}) => {

  console.log(code)
  //console.log(message)


  let errorMessage , redirectlink , alertVariant

  switch(code) {
    case "UserNotConfirmedException":
      errorMessage = "An email with Confirmation has been sent to the email. Please Confirm using the "
      redirectlink = "/confirmsignup"
      alertVariant = "danger"
      break;
    case "NotAuthorizedException":
        errorMessage = "If you have forgotten your password, use this  "
        redirectlink = "/forgotpassword"
        alertVariant = "danger"
        break;
    default :
        errorMessage = message
        alertVariant = "danger"

  }

  return (
    <ErrorComponent variant={alertVariant} message={errorMessage} redirectLink={redirectlink} />
  )

  // switch (code) {

  //   case "UserNotConfirmedException":
  //     return  (
  //       <div>
  //         <br />
  //         <Alert variant="danger">
  //           An email with Confirmation has been sent to the email . Please{''}
  //           <Alert.Link href="/confirmsignup"> confirm </Alert.Link> user first.
  //     </Alert>

  //         <AlertMessage variant="danger" message={message}/>
  //       </div>)

  //   case "NotAuthorizedException":
  //     return  (
  //       <div>
  //         <br />
  //         <AlertMessage variant="danger" message={message}/>

  //         <Alert variant="info">
  //           <Alert.Link href="/forgotpassword"> Click here </Alert.Link>{''} if you forgot your password.
  //        </Alert>

  //       </div>)

  //   default:
  //     return (
  //       <div>
  //         <br />
  //         <AlertMessage variant="danger" message={message} />
  //       </div>)
  // }
}

const AmplifySignIn = () => {

    return (
      <SignIn onSubmit={signInAsync} variant={bootstrapVariant} />
    )
  }

export {AmplifySignIn, AmplifySignInError }