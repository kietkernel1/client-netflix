import axiosClient from "./axiosClient";

const movieApi={
    
    getMovieById(id){
        const movie= axiosClient.get(`/movies/find/${id}`)
        return movie;
    },
    getMovieRandom(type){
        const movie = axiosClient.get(`/movies/random`, {params: {
            type: type
        }})
        return movie;
    }
}
export default movieApi;