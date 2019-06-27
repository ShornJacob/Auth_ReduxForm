import React from "react";
import { forgotPasswordAsync } from '../../../util/amplifyFunctions'
import ResetPassword from '../AuthSubComponents/ResetPassword'
import { bootstrapVariant } from '../../../constants'
import DisplayComponent from '../AuthSubComponents/DisplayComponent'

//message is received incase to display its  not dealth with
export const AmplifyResetPasswordError = ({ code, message }) => {

    console.log(code)
    console.log(message)


    let errorMessage, redirectlink, alertVariant

    //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
    switch (code) {
        //This exception is thrown when a user is not found.
        case "UserNotFoundException":
            errorMessage = "Email not found. You may sign up "
            redirectlink = "/signup"
            alertVariant = "info"
            break;

        //This exception is thrown when a user exceeds the limit for a requested AWS resource.
        case "LimitExceededException":
            errorMessage = "Attempt limit for this user has exceeded, please try after some time. "
            alertVariant = "danger"
            break;

        default:
            errorMessage = message;
            alertVariant = "danger";

    }

    return (
        <DisplayComponent variant={alertVariant} message={errorMessage} redirectLink={redirectlink} />
    )


}


export const AmplifyResetPasswordSuccess = () => {

    const successMessage = "A code has been sent to the Email. Please confirm the email and code "
    const redirectlink = "/confirmcode";
    const alertVariant = "success";

    return (
        <DisplayComponent variant={alertVariant} message={successMessage} redirectLink={redirectlink} />
    )

}

export const AmplifyResetPassword = () => {

    return (
        <ResetPassword onSubmit={forgotPasswordAsync} variant={bootstrapVariant} />
    )
}


// const Message = ({ code, message }) => {

//     console.log(code)
//     //console.log(message)

//     switch (code) {


//         default:
//             return (
//                 <div>
//                     <br />
//                     <AlertMessage variant="danger" message={message} />
//                 </div>)
//     }
//}

// const SuccessMessage = () => (
//     <div>
//         <br />
//         <Alert variant="info">
//            Code Resend  /{''}
//             <Alert.Link href="/signin"> here </Alert.Link></Alert>
//     </div>
// )


// //for rendering Input
// const renderTextInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
//     return (
//         <div>
//             <Form.Label>{label}</Form.Label>
//             <Form.Control type={type} placeholder={placeholder} {...input} />
//             {touched && ((error && <span className="error">{error}</span>))}
//         </div>
//     )
// }


// let forgotPasswordForm = props => {

//     const { error, pristine, handleSubmit, submitting , submitSucceeded,  variant} = props

//     return (
//         <Container className="justify-content-md-center">

//             <Alert variant={variant}>Resend Signup Code</Alert>

//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Field name="email"
//                         label="Email"
//                         type="email"
//                         placeholder="Email"
//                         component={renderTextInput}
//                         validate={[required, emailFormat]} />
//                 </Form.Group>


//                 <Button variant={variant} type="submit" disabled={pristine || submitting}>Sign Up</Button>

//             </Form>


//             {/* if error variable is defined, display it */}
//             {error && <Message {...error} />}

//             {submitSucceeded && <SuccessMessage />}
//         </Container>

//     )
// }

// forgotPasswordForm.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
// }

// export default reduxForm({
//     form: 'forgotPassword'
// })(forgotPasswordForm)
