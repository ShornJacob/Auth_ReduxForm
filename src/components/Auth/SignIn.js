import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import AlertMessage from '../AlertMessage'
import PropTypes from 'prop-types'

//Dealing with Errors

const Message = ({ code, message }) => {

  //console.log(code)
  //console.log(message)

  switch (code) {

    case "UserNotConfirmedException":
      return  (
        <div>
          <br />
          <Alert variant="danger">
            An email with Confirmation has been sent to the email . Please{''}
            <Alert.Link href="/confirmsignup"> confirm </Alert.Link> user.
      </Alert>

          <AlertMessage variant="danger" message={message}/>
        </div>)

    case "NotAuthorizedException":
      return  (
        <div>
          <br />
          <AlertMessage variant="danger" message={message}/>

          <Alert variant="info">
            <Alert.Link href="/forgotpassword"> Click here </Alert.Link>{''} if you forgot your password.
         </Alert>

        </div>)

    default:
      return (
        <div>
          <br />
          <AlertMessage variant="danger" message={message} />
        </div>)
  }
}


//for rendering Input
const renderTextInput = ({ input, label, type, placeholder }) => {
  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} {...input} />
    </div>
  )
}


let signInForm = props => {

  const { error, handleSubmit, pristine, submitting } = props

  return (
    <Container className="justify-content-md-center">

      <Alert variant="primary">Sign in here if you already have an account</Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Field name="email" component={renderTextInput} label="Email" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group>
          <Field name="password" component={renderTextInput} label="Password" type="password" placeholder="Password" />
        </Form.Group>

        <Button type="submit" disabled={pristine || submitting}>Sign In</Button>

      </Form>


      {/* if error variable is defined, display it */}
      {error && <Message {...error} />}
    </Container>

  )
}

signInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'signIn'
})(signInForm)
