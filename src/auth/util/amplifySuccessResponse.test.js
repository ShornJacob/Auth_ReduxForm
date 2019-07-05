//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

import amplifySuccessResponse from './amplifySuccessResponse'

//https://jestjs.io/docs/en/expect.html#expectobjectcontainingobject
test('SignUpForm Success - has a  Redirect link to confirmsignup ', () => {
    const obj = amplifySuccessResponse('signUpForm')

    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/confirmsignup"
        })
    )
})

test('resendSignUpForm Success - has a  Redirect link to confirmSignUp ', () => {
    const obj = amplifySuccessResponse('resendSignUpForm')

    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/confirmsignup"
        })
    )
})

test('confirmSignUpForm Success - has a  Redirect link to signin ', () => {
    const obj = amplifySuccessResponse('confirmSignUpForm')

    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/signin"
        })
    )
})

test('forgotPasswordForm Success - has a  Redirect link to signin ', () => {
    const obj = amplifySuccessResponse('forgotPasswordForm')

    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/forgotpasswordsubmit"
        })
    )
})
