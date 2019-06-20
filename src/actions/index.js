export const loginSuccess = (email,token) => {
    return {
        type : 'LOGIN_SUCCESS',
        payload : {
            email,
            token
        }
    }
}

export const logoutSuccess = () => ({type : 'LOGOUT_SUCCESS'})

export const isCurrentlyAuthenticated = (email,token) => {
    return {
        type : 'CURRENTLY_AUTHENTICATED',
        payload : {
            email,
            token
        }
    }
}

   