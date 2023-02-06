import { userApi } from "../api/userApi"
import globalStore from '../Redux/globalStore';
import { LOGOUT } from "../Redux/constant"
export const fetchLogout= async ()=>{
    
    try{ 
        await userApi.logout();
        globalStore.dispatch({type: LOGOUT})
    }catch(err){
        throw(err)
    }
}