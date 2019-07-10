//Amplify Functions - Route names are lowercase for each
// signUp
// confirmSignUp
// resendSignUp
// signIn
// forgotPassword
// forgotPasswordSubmit
// signOut

export default (code, message) => {

    let errorMessage, redirectLink, alertVariant

    //default alert variant
    alertVariant = "info"
    switch (code) {

        //SignUpform
        //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SignUp.html
        //This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.
        case "UsernameExistsException":
            errorMessage= "Email already registered. You may reset your password ";
            redirectLink = "/resetpassword";
            break;
//-------------------------------------------------------------------------------------------------------------------------
          //ResendSignupform
          //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ResendConfirmationCode.html
          //This exception is thrown when a user is not found.
          case "UserNotFoundException":
            errorMessage = "Email not found. You may sign up "
            redirectLink = "/signin"
            break
//---------------------------------------------------------------------------------------------------------------------------

        //ConfirmSignUpform
        //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmSignUp.html
        //This exception is thrown if a code has expired.
        case "ExpiredCodeException":
            errorMessage = "The confirmation code has expired. You can resend another code "
            redirectLink = "/resendsignup"
            break
//------------------------------------------------------------------------------------------------------------------------
        //signInform
        //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html
        //This exception is thrown when a user is not confirmed successfully.
        case "UserNotConfirmedException":
            errorMessage = "An email with a confirmation code has been sent to the email. Please confirm email and code  "
            redirectLink = "/confirmsignup"
            break;

        //This exception is thrown in many circumstances
        //Commented out because confimed users get this exception when trying to confirm email and code
        //In this instance, when password is wrong   
        // case "NotAuthorizedException":
        //     errorMessage = "Incorrect username or password. You may reset password "
        //     redirectLink = "/forgotpassword"
        //     alertVariant = "danger"
        //     break;
//------------------------------------------------------------------------------------------------------------------------------
        //resetpasswordrequest
        //https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html
        //This exception is thrown when a user exceeds the limit for a requested AWS resource.
        case "LimitExceededException":
            errorMessage = "Attempt limit for this user has exceeded, please try after some time. "
            alertVariant = "danger"
            break;

//-------------------------------------------------------------------------------------------------------------------------------
       //default - return code
        default:
            errorMessage = message;
            redirectLink = undefined
            alertVariant = "danger";
    }

    //rename ErrorMessage as message in return object
    return {   
        message : errorMessage,
        redirectLink,
        alertVariant
    }
}
