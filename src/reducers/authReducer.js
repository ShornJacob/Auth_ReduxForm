
const initialState = {
    AUTHENTICATED: false,
    AUTHENTICATING : false,
    email : undefined,
    token : undefined
} 

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS' :
        return ({
                AUTHENTICATED: true,
                AUTHENTICATING : false,
                email : action.payload.email,
                token : action.payload.token
            })


        default :
         return state
    }
   }
