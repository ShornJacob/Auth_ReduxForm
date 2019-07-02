//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

import amplifyErrorCodes from './amplifyErrorCodes'

//https://jestjs.io/docs/en/expect.html#expectobjectcontainingobject
test('Error Code UsernameExistsException error return has a  Redirect link to reset password', () => {
    const obj = amplifyErrorCodes('UsernameExistsException')
    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/resetpassword"
        })
    )
})


test('Error Code UserNotFoundException error return has a  Redirect link to signin', () => {
    const obj = amplifyErrorCodes('UserNotFoundException')
    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/signin"
        })
    )
})

test('Error code ExpiredCodeException error return has a  Redirect link to signin', () => {
    const obj = amplifyErrorCodes('ExpiredCodeException')
    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/resendsignup"
        })
    )
})

test('Error code UserNotConfirmedException error return has a  Redirect link to confirmsignup', () => {
    const obj = amplifyErrorCodes('UserNotConfirmedException')
    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/confirmsignup"
        })
    )
})


test('Error code NotAuthorizedException error return has a  Redirect link to forgotpassword display', () => {
    const obj = amplifyErrorCodes('NotAuthorizedException')
    expect(obj).toEqual(expect.objectContaining({

            redirectLink: "/forgotpassword",
            alertVariant : "danger"
        })
    )
})


test('Error code LimitExceededException error return has no redirectLink object and display variant of danger', () => {
    const obj = amplifyErrorCodes('LimitExceededException')
    expect(obj).toEqual(expect.objectContaining({

            redirectLink: undefined,
            alertVariant: "danger"
        })
    )
})
