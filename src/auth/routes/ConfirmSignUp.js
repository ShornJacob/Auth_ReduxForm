import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import PropTypes from 'prop-types'
import { emailFormat, required } from '../amplify/validations'
import ErrorAlert from 'auth/components/ErrorAlert'
import SuccessAlert  from 'auth/components/SuccessAlert'
import { confirmSignUpAsync } from 'auth/amplify'
import { bootstrapVariant, formTitles ,renderTextInput, formSubmitText } from 'auth/util'

const formName = "confirmSignUp"
//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

// //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html



let confirmSignUpForm = props => {

    const { error, pristine, handleSubmit, submitting, submitSucceeded, } = props

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
                    <Field name="code"
                        component={renderTextInput}
                        label="Code"
                        type="number"
                        placeholder="Code"
                        validate={[required]} />
                </Form.Group>

                <Button variant={bootstrapVariant} type="submit" disabled={pristine || submitting}>{formSubmitText[formName]}</Button>

            </Form>


            {/* if error variable is defined, display it */}
            {error && <div><br /><ErrorAlert {...error}/></div>}


             {/* if submitSucceded  is defined, display Success ALert */}
             {submitSucceeded && <div><br/><SuccessAlert formName={formName} /></div>}
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

