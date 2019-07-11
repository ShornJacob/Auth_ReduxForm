//https://aws-amplify.github.io/docs/js/authentication#using-modular-imports
import Auth from '@aws-amplify/auth';

Auth.configure({
  // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
  identityPoolId: 'ap-southeast-2:86775de0-a02c-474a-bcca-b849593493a1',

  // REQUIRED - Amazon Cognito Region
  region: 'ap-southeast-2',

  // OPTIONAL - Amazon Cognito User Pool ID
  userPoolId: 'ap-southeast-2_AGDxL3s55',

  // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  userPoolWebClientId: '20cepa6t3jdat61sel264064op'
});

export default Auth;
