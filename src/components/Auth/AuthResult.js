import React from 'react'
import DisplayComponent from './AuthSubComponents/DisplayComponent'
import amplifyErrorCodes from '../../util/amplifyErrorCodes'
import AuthAlert from './AuthAlert'

    //success will be received as true , if form a submitted successfuly
export default ({code,message,formName, submitSucceeded = false}) => {

    //console.log(formName)
    console.log(code)

    //message will be made more explicit if matched
    console.log(message)


    //If not matched, Alert will display the this message, so need to be passed
    //If true, submitSucceeded is true
    const msgObj = submitSucceeded ?  amplifyErrorCodes(code,message): amplifyErrorCodes(code,message)

    //console.log(msgObj)


        return (<AuthAlert variant={msgObj.alertVariant} message={msgObj.errorMessage} redirectLink={msgObj.redirectLink}></AuthAlert>)
}