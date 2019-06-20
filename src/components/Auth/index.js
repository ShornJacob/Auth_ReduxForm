import {currentAuthenticatedUserAsync} from './AmplifyFunctions.js'


//generic
export const checkCurrentAuthentication = () => {

    //calls amplify in this instance
    const user = currentAuthenticatedUserAsync()
}