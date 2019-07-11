import React from "react";
import SuccessAlert from 'auth/components/SuccessAlert'
import TestRenderer from 'react-test-renderer'
import {ConfirmSignUp, ForgotPasswordSubmit, SignIn} from 'auth/Links'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

//test for signUp Sucess
test('Success Alert for signUp has an instance of  Confirm Signup', () => {
    const testRenderer = TestRenderer.create(<SuccessAlert formName={'signUp'} />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(ConfirmSignUp))
})

//test for confirmSignUp Sucess
test('Success Alert for confirmSignUp has an instance of  SignIn', () => {
    const testRenderer = TestRenderer.create(<SuccessAlert formName={'confirmSignUp'} />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(SignIn))
})

//test for forgotPassword Sucess
test('Success Alert for forgotPassword has an instance of  forgotPassword Submit', () => {
    const testRenderer = TestRenderer.create(<SuccessAlert formName={'forgotPassword'} />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(ForgotPasswordSubmit))
})

//test for forgotPasswordSubmit Sucess
test('Success Alert for forgotPasswordSubmit has an instance of  SignIn', () => {
    const testRenderer = TestRenderer.create(<SuccessAlert formName={'forgotPasswordSubmit'} />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(SignIn))
})