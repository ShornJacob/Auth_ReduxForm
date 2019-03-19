import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import AlertMessage from '../AlertMessage'
import PropTypes from 'prop-types'
import { emailFormat, required, passwordRequirement, confirmPassword } from '../../util/auth/validations'




//Dealing with Errors

const Message = ({ code, message }) => {

    

    console.log(code)
    //console.log(message)

    switch (code) {

        case "UsernameExistsException":
        return  (
          <div>
            <br /> 
            <AlertMessage variant="danger" message={message}/>

            <Alert variant="danger">
              Click{''}
              <Alert.Link href="/forgotpassword"> here </Alert.Link> if you forgot your password.
        </Alert>
          </div>)

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
            A confirmation code has been sent to the Email . Please confirm code at /{''}
            <Alert.Link href="/ForgotPasswordSubmit"> here </Alert.Link></Alert>
    </div>
)


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

            <Alert variant={variant}>Sign Up for a new account</Alert>

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
            {error && <Message {...error} />}

            {submitSucceeded && <SuccessMessage />}
        </Container>

    )
}

signUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

export default reduxForm({
    form: 'signUp'
})(signUpForm)
