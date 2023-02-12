import React, { useState } from 'react'
import "../scss/navBar.scss"
import {Search, Notifications, ArrowDropDown, Menu, Close} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { fetchLogout } from "../callApi/processLogout"
import { useSelector } from 'react-redux';
const NavBar = () => {
  const [show, setShow]= useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { user } = useSelector( state => state.userReducer)

  window.onscroll= ()=>{
    setIsScroll(window.pageYOffset ===0? false  : true)
    return ()=>window.onscroll=null
  }

  const handleLogout= async ()=>{
    await fetchLogout()
  }

  return (
    <div className={`nav-container ${isScroll?`nav-container-scroll`: ``}`}>
      <div className='nav-logo'>
        <Link to="/">
        <img src='https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/Netflix_logo.svg.png?alt=media&token=cad434be-6be7-4fe8-ab5c-31593e90ac7a' alt=""></img>
        
        </Link>
      </div>
      <div className='nav-router'>
        <Link to='/'>
          Home
        </Link>  

        <Link to='/series'>
          Series
        </Link>

        <Link to='/movies'>
          Movies
        </Link>

        <Link to='#'>
          New and Popular
        </Link>

        <Link to='#'>
          My List
        </Link>
        
      </div>
      <div className='nav-feature'>
        <div className='nav-search'>
          <Search className='icon' />
          <input></input>
        </div>

        <span>KID</span>

        <Notifications className='icon' />

        <div className='nav-profile'>
        
        <img src= {user.avatar} alt="" />
        <div className='nav-setting'>
        <ArrowDropDown className='icon' onClick={()=>setShow(!show)}/>
        <ul style= {show? {display: "block"}: {display:"none"}}>
          <li>Setting</li>
          <li
            onClick={handleLogout}
          >Logout</li>
        </ul>

        </div>
        </div>

        
      </div>
      
        <div className='nav-mobile'>
          <label htmlFor="input-openMenu">
            <Menu style={{fontSize: "3.5rem", marginRight: "20px"}}/>
          </label>
        </div>
        
        <input type="checkbox" hidden id='input-openMenu' className='nav-mobile-input'></input>

        <label htmlFor="input-openMenu" className='nav-overlap'>
        </label>

        
        <div className="nav-mobile-option">

          <div className="nav-mobile-account">
            <img src= {user.avatar} alt="" />

            <label htmlFor="input-openMenu">
              <Close style={{fontSize: "3rem", marginRight:"10px"}}/> 
            </label>
          </div>
          <hr/>
          <div className="nav-mobile-feature">
            
            <Link to='/'>
              Home
            </Link>  

            <Link to='/series'>
              Series
            </Link>

            <Link to='/movies'>
              Movies
            </Link>

            <Link to='#'>
              New and Popular
            </Link>

            <Link to='#'>
              My List
            </Link>

            
          </div>
          <hr/>
          <p
            onClick={handleLogout}
          >Logout</p>
        </div>

    </div>
  )
}

export default NavBar