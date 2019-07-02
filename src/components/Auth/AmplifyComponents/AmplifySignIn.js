import React from 'react'
import { signInAsync } from '../../../util/amplifyAPI'
//import SignIn from '../SignIn'
import {bootstrapVariant} from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'
import err from '../../../util/amplifyerrorcodes'

//message is received incase to display its  not dealth with
export const AmplifySignInError = ({ code, message}) => {
  
  let cmpdisplayName = 'AmplifySignInError';

  const errorObj = err(code, message , cmpdisplayName)

  return (
    <DisplayComponent variant={errorObj.alertVariant} message={errorObj.errorMessage} redirectLink={errorObj.redirectLink} />
  )

  
  }   
  
// export const AmplifySignIn = () => {

//     return (
//       <SignIn onSubmit={signInAsync} variant={bootstrapVariant} />
//     )
//   }

  
 
  