import globalStore from "../Redux/globalStore"
import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../Redux/constant"
import { userApi } from "../api/userApi"

export const processLogin = async (account) =>{
    globalStore.dispatch({type: LOGIN_LOADING})
    try{
        const user = await userApi.login(account)
        globalStore.dispatch({type: LOGIN_SUCCESS, payload: user})
 
    }catch(err){
        globalStore.dispatch({type: LOGIN_FAIL, payload: err.response.data})
    }
}