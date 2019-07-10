import React from 'react'
import amplifyErrorCodes from 'auth/util/amplifyErrorCodes'
import amplifySuccessResponse from 'auth/util/amplifySuccessResponse'
import Alert from 'react-bootstrap/Alert'

    //success will be received as true , if form a submitted successfuly
export default ({code,message,formName, submitSucceeded = false}) => {

    //console.log(formName)
    console.log(code)

    //message will be made more explicit if matched
    console.log(message)


    //If not matched, Alert will display the this message, so need to be passed
    //If true, submitSucceeded is true
    const msgObj = submitSucceeded ?  amplifySuccessResponse(formName): amplifyErrorCodes(code,message)

    console.log(msgObj)

    return(<Alert variant={msgObj.alertVariant}> {msgObj.message} {msgObj.redirectLink ?  <a href={msgObj.redirectLink} className="alert-link">here.</a> : ''}</Alert>)
}