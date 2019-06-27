import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'
import {AmplifySignUpError, AmplifySignUpSuccess}  from '../AmplifyComponents/AmplifySignUp'
import { emailFormat, required, passwordRequirement, confirmPassword } from '../../../util/validations'

//for rendering Input
const renderTextInput = ({ input, label, type, placeholder ,meta: { touched, error, warning } }) => {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} {...input} />
            {touched && ((error && <span className="error">{error}</span>))}
        </div>
    )
}


let signUpForm = props => {

    const { error, pristine, handleSubmit, submitting, submitSucceeded,  variant } = props

    return (
        <Container className="justify-content-md-center">

            <Alert variant={variant}>Sign up as a new user.</Alert>

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
                        validate={[required, passwordRequirement]} />
                </Form.Group>

                <Form.Group>
                    <Field name="password2"
                        component={renderTextInput}
                        label="Confirm Password"
                        type="password"
                        placeholder="Password"
                        validate={[required, confirmPassword]} />
                </Form.Group>

                <Button variant={variant} type="submit" disabled={pristine || submitting}>Sign Up</Button>

            </Form>


             {/* if error variable is defined, display it */}
             {error && <div><br/><AmplifySignUpError {...error} /></div>}


            {/* if submitSucceded  is defined, display Success ALert */}
            {submitSucceeded && <div><br/><AmplifySignUpSuccess /></div>}
        </Container>

    )
}

signUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
    form: 'signUp'
})(signUpForm)


