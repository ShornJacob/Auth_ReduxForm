import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import AlertMessage from '../AlertMessage'
import PropTypes from 'prop-types'
import { emailFormat, required } from '../../util/auth/validations'


//https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html

//Dealing with Errors

const Message = ({ code, message }) => {

    console.log(code)
    //console.log(message)

    switch (code) {


        default:
            return (
                <div>
                    <br />
                    <AlertMessage variant="danger" message={message} />
                </div>)
    }
}

const SuccessMessage = () => (
    <div>
        <br />
        <Alert variant="info">
           Code Resend  /{''}
            <Alert.Link href="/signin"> here </Alert.Link></Alert>
    </div>
)


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


let forgotPasswordForm = props => {

    const { error, pristine, handleSubmit, submitting , submitSucceeded,  variant} = props

    return (
        <Container className="justify-content-md-center">

            <Alert variant={variant}>Resend Signup Code</Alert>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Field name="email"
                        label="Email"
                        type="email"
                        placeholder="Email"
                        component={renderTextInput}
                        validate={[required, emailFormat]} />
                </Form.Group>


                <Button variant={variant} type="submit" disabled={pristine || submitting}>Sign Up</Button>

            </Form>


            {/* if error variable is defined, display it */}
            {error && <Message {...error} />}

            {submitSucceeded && <SuccessMessage />}
        </Container>

    )
}

forgotPasswordForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
    form: 'forgotPassword'
})(forgotPasswordForm)
