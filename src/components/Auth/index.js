import {currentAuthenticatedUserAsync} from 'AmplifyComponents/amplifyFunctions'
//generic
export const checkCurrentAuthentication = () => {

    //calls amplify in this instance
    currentAuthenticatedUserAsync()
}