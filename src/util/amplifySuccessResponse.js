//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

export default (formName) => {

    let message, redirectLink, alertVariant

    //default alertVariant
    alertVariant = "success"
    switch (formName) {

        case "signUpForm":
            message = "A confirmation code has been sent to the Email . Please confirm "
            redirectLink = "/confirmsignup";
            break;

        case "confirmSignUpForm":
            message = "The email has been successfully confirmed. Please sign in "
            redirectLink = "/signin";
            break


        case "resendSignUpForm":
            message = "The confirmation code has been resend . Please confirm "
            redirectLink = "/confirmsignup";
            break;

        case "forgotPasswordForm":
            message = "The confirmation code has been send to the Email. Please confirm the new password with the code "
            redirectLink = "/forgotpasswordsubmit";
            break;

        default:
            message = formName;
            alertVariant = "danger";
    }

    return {
        message,
        redirectLink,
        alertVariant
    }
}