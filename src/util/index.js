import {currentAuthenticatedUserAsync} from './amplifyFunctions'

//generic
export const checkCurrentAuthentication = () => {

    //calls amplify in this instance
    currentAuthenticatedUserAsync()
}