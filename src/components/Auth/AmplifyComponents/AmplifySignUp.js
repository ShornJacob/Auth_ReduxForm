import React from 'react';
import { signUpAsync } from '../../../util/amplifyAPI'
import SignUp from '../SignUp'
import { bootstrapVariant } from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'
import err from '../../../util/amplifyErrorCodes'

//message is received incase to display its  not dealth with
export const AmplifySignUpError = ({ code, message }) => {

    let cmpdisplayName = 'AmplifySignUpError';

    const errormsgs = err(code, message , cmpdisplayName)
  
    return (
      <DisplayComponent variant={err.alertVariant} message={err.errorMessage} redirectLink={err.redirectLink} />
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
