import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import AuthResult  from '../components/AuthResult'
import {forgotPasswordSubmitAsync} from '../util/amplifyAPI'





const renderTextInput = ({ input, label, type, placeholder }) => {
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} {...input} />
        </div>
    )
}

let forgotPasswordSubmitForm = props => {

    const { error, handleSubmit, pristine, submitting, submitSucceeded , variant} = props

    const formName = "forgotPasswordForm"

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


             {/* if error variable is defined, display it */}
             {error && <div><br/><AuthResult {...error} formName={formName}/></div>}


{/* if submitSucceded  is defined, display Success ALert */}
{submitSucceeded && <div><br/><AuthResult  formName={formName} submitSucceeded /></div>}

        </Container>

    )
}



const ForgotPasswordSubmitReduxForm = reduxForm({
    form: 'forgotPasswordSubmit'
  })(forgotPasswordSubmitForm)
  
 export const AmplifyForgotPasswordSubmit = () => <ForgotPasswordSubmitReduxForm onSubmit={forgotPasswordSubmitAsync} />