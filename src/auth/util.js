import React from 'react'
import Form from 'react-bootstrap/Form'

 // [  'primary',  'secondary',  'success',  'danger',  'warning',  'info',  'light',  'dark',  ]
 export const bootstrapVariant = "secondary"

 
//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

export const formTitles =  {
    signIn : 'Already have an account. Sign In',
    signUp : "Sign up for a new account.",
    confirmSignUp : "Confirm new user.",
    resendSignUp : "Resend code for sign up.",
    forgotPassword : "Request code to reset password.",
    forgotPasswordSubmit : "Reset password using code."
}

export const formSubmitText =  {
    signIn : 'Sign in',
    signUp : "Sign up",
    confirmSignUp : "Confirm",
    resendSignUp : "Resend code",
    forgotPassword : "Request",
    forgotPasswordSubmit : "Reset"
}


export const renderTextInput = ({ input, label, type, placeholder ,meta: { touched, error, warning } }) => {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} {...input} />
            {touched && ((error && <span className="error">{error}</span>))}
        </div>
    )
}

