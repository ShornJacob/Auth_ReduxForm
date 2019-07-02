import React from './node_modules/react'
import err from '../../util/errorcodes'
import DisplayComponent from './AuthSubComponents/DisplayComponent'

export function ({code,message,errorIn}) {

    console.log(errorIn)
    const errormsgs = err(code, message)

    return (
        <DisplayComponent variant={err.alertVariant} message={err.errorMessage} redirectLink={err.redirectLink} />
    )
}


export function AmplifySuccessMessage({code,message,successIn}) {

    console.log(errorIn)
    const errormsgs = err(code, message)

    return (
        <DisplayComponent variant={err.alertVariant} message={err.errorMessage} redirectLink={err.redirectLink} />
    )
}