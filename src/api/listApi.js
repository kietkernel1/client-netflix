import axiosClient from "./axiosClient";

const listApi=(params)=>{
    
    const response= axiosClient.get("/list",{params:{
        type: params.type,
        genre: params.genre
    }})
    return response;
}
export default listApi;