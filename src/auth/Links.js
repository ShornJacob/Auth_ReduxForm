import React from 'react'

// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut
//Auth Links as React components
export const SignUp = (props) => <a href="/signup" className="alert-link">{props.children ? props.children : "Sign up" }}</a>
export const ConfirmSignUp = (props) => <a href="/confirmsignup" className="alert-link">{props.children ? props.children : "Confirm user" }</a>
export const ResendSignUp = (props) => <a href="/resendsignup" className="alert-link">{props.children ? props.children : "Resend code" }</a>
export const ForgotPassword = (props) => <a href="/forgotpassword" className="alert-link">{props.children ? props.children : "Request code" }</a>
export const ForgotPasswordSubmit = (props) => <a href="/forgotpasswordsubmit" className="alert-link">{props.children ? props.children : "Reset password" }</a>
export const SignIn = (props) => <a href="/signin" className="alert-link">{props.children ? props.children : "Sign in" }</a>
