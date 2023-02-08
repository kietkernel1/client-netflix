import React, { useEffect, useState } from 'react'
import "../scss/banner.scss"
import {PlayArrow, InfoOutlined} from '@mui/icons-material';
import movieApi from '../api/movieApi';
import listApi from '../api/listApi';

const Banner = ({ type, setGenre }) => {
  const [movie, setMovie]= useState({});
  const [genreArr, setGenreList] = useState([]);
  
  useEffect(()=>{
    console.log("sad")
  },[window.innerWidth])

  useEffect(()=>{
    const fetchRandomMovie= async ()=>{
      try{
        const randomMovie = await movieApi.getMovieRandom(type)
        const genreList = await listApi({type})
        setGenreList(genreList.reduce((arr, item) => 
          [...arr, item.genre]
          ,[]))
        setMovie(randomMovie[0]);
      }catch(error){
        throw error
      }
    }

    fetchRandomMovie();
    return ()=>{
      setGenre("")
    }
  },[type])

  return (
    <div className='banner-container'>
        <img src={movie.img} alt="" />
       <div className='banner-brief'>
            
            <div className='banner-type' style={{visibility: type? "visible": "hidden"}}>
              <span>{type==="Series"?"Series": "Movies"}</span>
              <select onChange={(e)=>{setGenre(e.target.value)}}>
                {
                  genreArr.map((item, index) =>
                  <option value={item}  key= {`3-${index}`}>{item}</option>
                )}
                
              </select>
            </div>
            
            <img src={movie.imgTitle} alt="" />
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            
            <div className='banner-icon-container'>
              <div className='banner-icon'>
                <PlayArrow className='banner-icon-feature'/>
                <span>Play</span>
              </div>

              <div className='banner-icon'>
                <InfoOutlined className='banner-icon-feature'/>
                <span>Info</span>
              </div>
            </div>

       </div>
    </div>
  )
}

export default Banner