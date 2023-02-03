import axios from "axios"
import jwtDecode from "jwt-decode";
import requestNewToken from "../callApi/processRefreshToken";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_baseURL,
    timeout: 2500,
    headers:{
        "Content-type": "application/json"
    },
})

axiosClient.interceptors.request.use( async config=>{
    if(config.url=== "/auth/login"||config.url==="/auth/logout"){
        return config;
    }
    let accessToken = localStorage.getItem("token")

    const currentTime = new Date();
    const decodedTokenTime = jwtDecode(accessToken.split(" ")[1])

    if(decodedTokenTime.exp < currentTime.getTime()/1000){
        const newToken= await requestNewToken()
        accessToken= `Bearer ${newToken}`
        localStorage.setItem("token", accessToken)
    }

    config.headers.token=accessToken
    return config
}, error=>{
    throw error;
})

axiosClient.interceptors.response.use(req =>
    req.data
, error =>{
    throw error
})

export default axiosClient;