import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

import PropTypes from 'prop-types'
import { emailFormat, required } from 'auth/amplify/validations'
import ErrorAlert  from 'auth/components/ErrorAlert'
import SuccessAlert  from 'auth/components/SuccessAlert'
import { forgotPasswordAsync } from 'auth/amplify'
import { bootstrapVariant, formTitles, renderTextInput , formSubmitText} from 'auth/util'

//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut


const formName = "forgotPassword"



let forgotPasswordForm = props => {

    const { error, pristine, handleSubmit, submitting, submitSucceeded} = props

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


                <Button variant={bootstrapVariant} type="submit" disabled={pristine || submitting}>{formSubmitText[formName]}</Button>

            </Form>


              {/* if error variable is defined, display it */}
              {error && <div><br/><ErrorAlert {...error}/></div>}


            {/* if submitSucceded  is defined, display Success ALert */}
            {submitSucceeded && <div><br/><SuccessAlert formName={formName} /></div>}
        </Container>

    )
}

forgotPasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

const ForgotPasswordReduxForm = reduxForm({
    form: 'forgotPassword'
})(forgotPasswordForm)

export const AmplifyForgotPassword = () => <ForgotPasswordReduxForm onSubmit={forgotPasswordAsync} />