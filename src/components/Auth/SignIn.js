import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import PropTypes from 'prop-types'
import AuthResult  from './AuthResult'
import {signInAsync} from '../../util/amplifyAPI'
import {bootstrapVariant} from '../../constants'



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

  const form = 'signInForm';

  return (
    <Container className="justify-content-md-center">

      <Alert variant={bootstrapVariant}>Already have an account. Sign In.</Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Field name="email" component={renderTextInput} label="Email" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group>
          <Field name="password" component={renderTextInput} label="Password" type="password" placeholder="Password" />
        </Form.Group>

        <Button type="submit" variant={bootstrapVariant} disabled={pristine || submitting}>Sign In</Button>

      </Form>


      {/* if error variable is defined, display it */}
      {error && <div><br/><AuthResult {...error} formName={form} submitSucceeded={false}/></div>}
    </Container>

  )
}

signInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

const SignInReduxForm = reduxForm({
  form: 'signIn'
})(signInForm)

const AmplifySignIn = () => <SignInReduxForm onSubmit={signInAsync} />

export {AmplifySignIn}

