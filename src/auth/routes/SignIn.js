import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { emailFormat, required } from 'auth/amplify/validations'
import PropTypes from 'prop-types'
import ErrorAlert from 'auth/components/ErrorAlert'
import { signInAsync } from 'auth/amplify'
import { bootstrapVariant, formTitles , renderTextInput , formSubmitText } from 'auth/util'

const formName = "signIn"

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut


//for rendering Input
// const renderTextInput = ({ input, label, type, placeholder }) => {
//   return (
//     <div>
//       <Form.Label>{label}</Form.Label>
//       <Form.Control type={type} placeholder={placeholder} {...input} />
//     </div>
//   )
// }


let signInForm = props => {

  const { error, handleSubmit, pristine, submitting } = props

  return (
    <Container className="justify-content-md-center">

      <Alert variant={bootstrapVariant}>{formTitles[formName]}</Alert>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Field name="email"
            label="Email"
            type="email"
            placeholder="Email"
            component={renderTextInput}
            validate={[required, emailFormat]} />
        </Form.Group>

        <Form.Group>
          <Field name="password"
            component={renderTextInput}
            label="Password"
            type="password"
            placeholder="Password" 
            validate={[required]}/>
        </Form.Group>

        <Button type="submit" variant={bootstrapVariant} disabled={pristine || submitting}>{formSubmitText[formName]}</Button>

      </Form>


      {/* if error variable is defined, display it */}
      {error && <div><br /><ErrorAlert {...error} /></div>}
    </Container>

  )
}

signInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

const SignInReduxForm = reduxForm({
  form: formName
})(signInForm)

export const AmplifySignIn = () => <SignInReduxForm onSubmit={signInAsync} />


