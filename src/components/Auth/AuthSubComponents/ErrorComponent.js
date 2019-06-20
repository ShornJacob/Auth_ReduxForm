import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default  ({variant,message,RedirectLink}) => {

  console.log(message)

  return (<Alert variant={variant}> {message}</Alert>)

}
