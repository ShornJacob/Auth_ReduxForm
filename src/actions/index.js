export const authenticate = (email,token) => {
    return {
        type : 'LOGIN_SUCCESS',
        payload : {
            email,
            token
        }
    }
}