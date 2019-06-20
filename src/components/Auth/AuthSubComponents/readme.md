AuthSubComponents are reduxForm components

the form has error variable set when eror is encountered

they import components to display when errors are encountered

 {/* if error variable is defined, display it */}
{error && <div><br/><AmplifySignInError {...error} /></div>}

AmplifyComponents are imported and Displayed above inside the Auth SubComponent

Eg of a Sub Component
SignIn

ErrorComponent is a generic Component to display messages as alert with redirect Links