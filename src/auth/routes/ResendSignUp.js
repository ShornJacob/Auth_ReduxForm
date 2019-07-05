import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import AuthResult  from '../components/AuthResult'
import PropTypes from 'prop-types'
import {resendSignUpAsync} from '../util/amplifyAPI'
import { emailFormat, required } from '../util/validations'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

//for rendering Input
const renderTextInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} {...input} />
            {touched && ((error && <span className="error">{error}</span>))}
        </div>
    )
}


let resendSignUpForm = props => {

    const { error, pristine, handleSubmit, submitting , submitSucceeded,  variant} = props

    let formName = "resendSignUpForm"

    return (
        <Container className="justify-content-md-center">

            <Alert variant={variant}>Resend signup confirmation code.</Alert>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Field name="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        component={renderTextInput}
                        validate={[required, emailFormat]} />
                </Form.Group>


                <Button variant={variant} type="submit" disabled={pristine || submitting}>Resend</Button>

            </Form>


         
             {/* if error variable is defined, display it */}
             {error && <div><br/><AuthResult {...error} formName={formName}/></div>}


            {/* if submitSucceded  is defined, display Success ALert */}
            {submitSucceeded && <div><br/><AuthResult  formName={formName} submitSucceeded /></div>}
        </Container>

    )
}

resendSignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

const ResendSignUpReduxForm = reduxForm({
    form: 'resendSignUp'
  })(resendSignUpForm)
  
  const AmplifyResendSignUp = () => <ResendSignUpReduxForm onSubmit={resendSignUpAsync} />
  
  export {AmplifyResendSignUp}