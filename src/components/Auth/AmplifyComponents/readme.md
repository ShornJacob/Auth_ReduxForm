amplifyFunctions call the Auth module in Amplify

utilily functions are called when an asyn function resolves or rejects

this util function dispatches actions

Eg of an Amplify Component
 <SignIn onSubmit={signInAsync} variant={bootstrapVariant} />

 AmplifyComponent imports Auth Sub Components are encapsulates them with an onSubmit function
 bootstrapVariant allows to change themes in above

AmplifyComponent also imports generic Auth component ,ErrorComponent , decorates it based on switching errorcodes  and exports it back to be used in SubComponents

 