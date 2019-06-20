import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default  ({variant,message, redirectLink}) => {

  //console.log(message)

  return (<Alert variant={variant}> {message} {redirectLink ? <a href={redirectLink} className="alert-link">here</a> : ''}</Alert>)

}
