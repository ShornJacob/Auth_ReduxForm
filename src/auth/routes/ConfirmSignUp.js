import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import PropTypes from 'prop-types'
import { emailFormat, required } from '../util/validations'
import AuthResult from 'auth/components/AuthResult'
import { confirmSignUpAsync } from 'auth/util/amplifyAPI'
import { bootstrapVariant } from 'auth/constants'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

// //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html


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


let confirmSignUpForm = props => {

    const { error, pristine, handleSubmit, submitting, submitSucceeded, variant } = props

    const formName = 'confirmSignUpForm'

    return (
        <Container className="justify-content-md-center">

            <Alert variant={bootstrapVariant}>Confirm verification code for sign up.</Alert>

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
                    <Field name="code"
                        component={renderTextInput}
                        label="Code"
                        type="number"
                        placeholder="Code"
                        validate={[required]} />
                </Form.Group>

                <Button variant={bootstrapVariant} type="submit" disabled={pristine || submitting}>Confirm Sign Up</Button>

            </Form>


            {/* if error variable is defined, display it */}
            {error && <div><br /><AuthResult {...error} formName={formName} /></div>}


            {/* if submitSucceded  is defined, display Success ALert */}
            {submitSucceeded && <div><br /><AuthResult formName={formName} submitSucceeded /></div>}
        </Container>

    )
}

confirmSignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

const ConfirmSignUpReduxForm = reduxForm({
    form: 'confirmSignUp'
})(confirmSignUpForm)

export const AmplifyConfirmSignUp = () => <ConfirmSignUpReduxForm onSubmit={confirmSignUpAsync} />

