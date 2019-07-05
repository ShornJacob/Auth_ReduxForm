import {currentAuthenticatedUserAsync} from './amplifyAPI'

//generic
export const checkCurrentAuthentication = () => {

    //calls amplify in this instance
    currentAuthenticatedUserAsync()
}