import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./constant"

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,
    loading: false
}


const loginReducer = (state = INITIAL_STATE, action) =>{
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

        case LOGOUT:
            localStorage.clear()
            return {
                error: null,
                user: null
            }

        default:
            return state
    }
}

export default loginReducer