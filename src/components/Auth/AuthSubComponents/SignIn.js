import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import PropTypes from 'prop-types'
import {AmplifySignInError}  from '../AmplifyComponents/AmplifySignIn'



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

  const { error, handleSubmit, pristine, submitting, variant } = props

  return (
    <Container className="justify-content-md-center">

      <Alert variant={variant}>Already have an account. Sign In.</Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Field name="email" component={renderTextInput} label="Email" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group>
          <Field name="password" component={renderTextInput} label="Password" type="password" placeholder="Password" />
        </Form.Group>

        <Button type="submit" variant={variant} disabled={pristine || submitting}>Sign In</Button>

      </Form>


      {/* if error variable is defined, display it */}
      {error && <div><br/><AmplifySignInError {...error} /></div>}
    </Container>

  )
}

signInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
  form: 'signIn'
})(signInForm)