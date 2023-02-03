import axiosClient from "./axiosClient";
export const userApi = {
    login(data){
        const url= "/auth/login";
        return axiosClient.post(url, data, {withCredentials: true})
    },
    
    logout(){
        const url = "/auth/logout";
        return axiosClient.delete(url)
    }
}