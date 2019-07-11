import React from "react";
import ErrorAlert from 'auth/components/ErrorAlert'
import TestRenderer from 'react-test-renderer'
import {SignUp, ConfirmSignUp, ForgotPassword} from 'auth/Links'

//https://reactjs.org/docs/test-renderer.html
// React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

//https://reactjs.org/docs/test-renderer.html#testinstancefindbytype
//Find a single descendant test instance with the provided type. If there is not exactly one test instance with the provided type, it will throw an error.



//test for UserNotConfirmedException
test('Error Alert for UserNotConfirmedException has an instance of  ConfirmPassword', () => {
    const testRenderer = TestRenderer.create(<ErrorAlert code={'UserNotConfirmedException'} />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(ConfirmSignUp))
})


//test for UserNotConfirmedException
test('Error Alert for UserNotConfirmedException has an instance of  ConfirmPassword', () => {
    const testRenderer = TestRenderer.create(<ErrorAlert code={'ExpiredCodeException'} />)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(ConfirmSignUp))
})



