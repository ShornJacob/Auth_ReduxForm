import React from 'react'

// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut
//Auth Links as React components
export const SignUp = (props) => <a href="/signup" className="alert-link">{props.children}}</a>
export const ConfirmSignUp = (props) => <a href="/confirmsignup" className="alert-link">{props.children}</a>
export const ResendSignUp = () => <a href="/resendsignup" className="alert-link">Resend Code</a>
export const ForgotPassword = (props) => <a href="/forgotpassword" className="alert-link">{props.children}</a>
export const ForgotPasswordSubmit = () => <a href="/forgotpasswordsubmit" className="alert-link">Reset Password</a>
export const SignIn = () => <a href="/signin" className="alert-link">Sign In</a>
