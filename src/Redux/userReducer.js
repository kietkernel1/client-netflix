import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    RESET
} from "./constant"

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,
    loading: false
}


const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case LOGIN_LOADING: {
            return{
                ...state,
                loading: true
            }
        }

        case LOGIN_SUCCESS: {
            const {accessToken, ...user} = action.payload
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", `Bearer ${accessToken}`)
            return{
                ...state,
                user,
                loading: false
            }
        }

        case LOGIN_FAIL: {
            const message = action.payload
            return{
                ...state,
                loading: false,
                error: message
            }
        }

        case LOGOUT: {
            localStorage.clear()
            return {
                ...state,
                error: null,
                user: null
            }
        }
            
        case REGISTER_LOADING: {
            return {
                ...state,
               loading: true
            }
        }

        case REGISTER_SUCCESS: {
            
            return {
                ...state,
               loading: false
            }
        }

        case REGISTER_FAIL: {
            
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case RESET: {
            return INITIAL_STATE
        }
        default:
            return state
    }
}

export default userReducer