import React from 'react'
import Banner from '../components/Banner'
import MovieSlider from '../components/MovieSlider'
import NavBar from '../components/NavBar'
import "../scss/home.scss"
import listApi from "../api/listApi";
import { useEffect, useState } from "react";

const Home = ({ type }) => {
  const [ searchList, setSearchList ] = useState([]);
  const [ activeGenre, setActiveGenre ]= useState("");

  useEffect( ()=>{
    const fetchApi= async ()=>{
      try{
        const data = await listApi({type, genre: activeGenre});
        setSearchList(data);
      }catch(error){
        throw error
      }
    }
    
    fetchApi();
  },[ type, activeGenre ])

  return (
    
    <div className= 'home-container'>
        <NavBar />
        <Banner type={type} setGenre={setActiveGenre}/>

        {searchList.map((item, index)=>
          <MovieSlider 
          key={`2-${index}`}
          list={item}
          />
          )
        }    

    </div>
  )
}

export default Home