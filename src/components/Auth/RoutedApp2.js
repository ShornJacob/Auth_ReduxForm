// import React from "react";
// import { Route, Switch,  Redirect } from 'react-router-dom'

// //components
// //used for new user
// import SignUp from './SignUp'
// import ConfirmSignUp from './ConfirmSignUp'
// import ResendSignup from './ResendSignup'


// import ForgotPassword from './ForgotPassword'
// import ForgotPasswordSubmit from './ForgotPasswordSubmit'

// import SignIn from './AuthSubComponents/SignIn'

// //others
// import AnApp from '../../AnApp'
// import Login from '../../login'

// import PrivateRoute from './PrivateRoute'

// //functions 
// import {
//   signUpAsync, confirmSignUpAsync, resendSignUpAsync,
//   signInAsync,
//   forgotPasswordAsync, forgotPasswordSubmitAsync
// } from './AmplifyFunctions.js/index.js'

// export default ({ authenticated, authenticating, email }) => {

//   // console.log(authenticated)
//   // console.log(authenticating)
//   // console.log(email)


//   return(
//     <div>
      

//       <Route exact path='/login' component={Login} />

//       <PrivateRoute path="/protected" component={AnApp} />
//     </div>
//   )

//   // return(
//   //   <div>
//   //     <Route exact path='/signup' render={() => <SignUp onSubmit={signUpAsync} variant={bootstrapVariant}/>} />
//   //     <Route exact path='/confirmsignup' render={() => <ConfirmSignUp onSubmit={confirmSignUpAsync} />} />
//   //     <Route exact path='/resendsignup' render={() => <ResendSignup onSubmit={resendSignUpAsync} />} />

//   //     <Route exact path='/signin' render={() => <SignIn onSubmit={signInAsync} variant={bootstrapVariant} />} />

//   //     <Route exact path='/forgotpassword' render={() => <ForgotPassword onSubmit={forgotPasswordAsync} />} />
//   //     <Route exact path='/forgotpasswordsubmit' render={() => <ForgotPasswordSubmit onSubmit={forgotPasswordSubmitAsync} />} />

//   //     <PrivateRoute path="/protected" component={AnApp} />
//   //   </div>
//   // )

//   // const routesWhenAuthenticated = (
//   //   <Switch>
//   //     <Route exact path='/anapp' component={AnApp} />
//   //     <Route exact path="/signin" render={() => (<Redirect to="/anapp" />)} />
//   //     <Route exact path="/signout" render={() => (<Redirect to="/anapp" />)} />
//   //   </Switch>
//   // )

//   // return (
//   //   <React.Fragment>
//   //     {authenticated ? routesWhenAuthenticated : routesWhenNotAuthenticated}
//   //   </React.Fragment>

//   // )
// }