import { SubmissionError } from 'redux-form'

const throwError = (error) => {

    const errorObject = {
        _error: {
            code: error.code,
            message: error.message
        }
    }

    throw new SubmissionError(errorObject)
}

export const signUpError= (error) => {

    console.log("signUpError")

    throwError(error)

}

export const confirmSignUpError = (error) => {

    console.log("confirmSignUpError")

    throwError(error)


}

export const resendSignUpError = (error) => {

    console.log("resendSignUpError")

    throwError(error)


}

export const signInError = (error) => {

    console.log("signInError")

    throwError(error)

}

export const forgotPasswordError = (error) => {

    console.log("forgotPasswordError")

    throwError(error)

}

export const forgotPasswordSubmitError = (error) => {

    console.log("forgotPasswordError")

    throwError(error)

}

export const signOutError= (response) => {

    console.log("signOutError")

}
