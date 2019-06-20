import {currentAuthenticatedUserAsync} from './AmplifyFunctions.js'


//generic
export const checkCurrentAuthentication = () => {

    //calls amplify in this instance
    currentAuthenticatedUserAsync()
}