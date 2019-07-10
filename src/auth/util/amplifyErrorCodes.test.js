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

//this error is returned also by other exceptions. not just wrong password
// test('Error code NotAuthorizedException error return has a  Redirect link to forgotpassword display', () => {
//     const obj = amplifyErrorCodes('NotAuthorizedException')
//     expect(obj).toEqual(expect.objectContaining({

//             redirectLink: "/forgotpassword",
//             alertVariant : "danger"
//         })
//     )
// })


test('Error code LimitExceededException error return has no redirectLink object and display variant of danger', () => {
    const obj = amplifyErrorCodes('LimitExceededException')
    expect(obj).toEqual(expect.objectContaining({

            redirectLink: undefined,
            alertVariant: "danger"
        })
    )
})


test('Unknown code and message returns the same message with a danger reDirect ', () => {
    const obj = amplifyErrorCodes('UnknownCode','message')
    expect(obj).toEqual(expect.objectContaining({
            message : 'message',
            redirectLink: undefined,
            alertVariant: "danger"
        })
    )
})
