import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import AlertMessage from '../AlertMessage'


const Message = ({ code, message }) => {

    //console.log(code)
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
            Confirm new password using a confirmation Code send to the Email{''}
            <Alert.Link href="/ForgotPasswordSubmit"> here </Alert.Link></Alert>
    </div>
)


const renderTextInput = ({ input, label, type, placeholder }) => {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} {...input} />
        </div>
    )
}

let forgotPasswordForm = props => {

    const { error, handleSubmit, pristine, submitting, submitSucceeded , variant} = props

    //console.log(error)

    return (
        <Container className="justify-content-md-center">

            <Alert variant={variant}>Confirm email with a code</Alert>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Field name="email" component={renderTextInput} label="Email" type="email" placeholder="Email" />
                </Form.Group>


                <Form.Group>
                    <Field name="code" component={renderTextInput} label="Code" type="number" placeholder="Code" />
                </Form.Group>

                <Button variant={variant} type="submit" disabled={pristine || submitting}>Forgot Password</Button>


            </Form>


            {error && <Message {...error} />}

            {submitSucceeded && <SuccessMessage />}

        </Container>

    )
}

export default forgotPasswordForm = reduxForm({
    form: 'forgotPassword'
})(forgotPasswordForm)

