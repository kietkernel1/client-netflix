import {userApi} from "../api/userApi"
import globalStore from "../Redux/globalStore"
import { RESET } from "../Redux/constant"
export const fetchRegister= async (data)=>{
    try{    
        const msg = await userApi.register(data)
        console.log(msg)
        globalStore.dispatch({type: RESET})
    }catch(err){
        console.log(err)
    }
}