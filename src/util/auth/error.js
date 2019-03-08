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


export const signInError = (error) => {

    console.log("signInError")

    throwError(error)

}
