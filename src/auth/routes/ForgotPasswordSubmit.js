import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import ErrorAlert from 'auth/components/ErrorAlert'
import SuccessAlert from 'auth/components/SuccessAlert'
import { forgotPasswordSubmitAsync } from 'auth/amplify'
import { bootstrapVariant, formTitles,renderTextInput, formSubmitText } from 'auth/util'
import { emailFormat, required, passwordRequirement, confirmPassword } from 'auth/amplify/validations'

const formName = "forgotPasswordSubmit"

let forgotPasswordSubmitForm = props => {

    const { error, handleSubmit, pristine, submitting, submitSucceeded } = props

    console.log(error)
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
                        label="Code" type="number"
                        placeholder="Code"
                        validate={[required]} />
                </Form.Group>


                <Form.Group>
                    <Field name="password"
                        component={renderTextInput}
                        label="New Password"
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

                <Button variant={bootstrapVariant} type="submit" disabled={pristine || submitting}>{formSubmitText[formName]}</Button>


            </Form>


            {/* if error variable is defined, display it */}
            {error && <div><br /><ErrorAlert {...error} /></div>}


            {/* if submitSucceded  is defined, display Success ALert */}
            {submitSucceeded && <div><br /><SuccessAlert formName={formName} /></div>}

        </Container>

    )
}



const ForgotPasswordSubmitReduxForm = reduxForm({
    form: 'forgotPasswordSubmit'
})(forgotPasswordSubmitForm)

export const AmplifyForgotPasswordSubmit = () => <ForgotPasswordSubmitReduxForm onSubmit={forgotPasswordSubmitAsync} />