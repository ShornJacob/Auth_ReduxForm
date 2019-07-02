import React from 'react'
import Alert from 'react-bootstrap/Alert'


export default function AuthAlert({variant,message,redirectLink}) {
    return (
            <Alert variant={variant}> {message} {redirectLink ?  <a href={redirectLink} className="alert-link">here.</a> : ''}</Alert>
    )
}
