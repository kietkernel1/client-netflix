import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./app.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Watch from "./pages/Watch"

function App() {
  const { user } = useSelector(state => state.userReducer)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
    
  },[user])
  return (
    <div className="App">
     <Routes>
        <Route path="/" element ={user? <Home />: <Navigate to='/register'/>} />        
        <Route path="/register" element ={<Register />} />
        <Route path="/login" element ={<Login />} />
        
      {user&&<>
        <Route path="/watch" element ={<Watch />} />
        <Route path="/series" element ={<Home type="Series"/>} />
        <Route path="/movies" element ={<Home type="Movies"/>} />
        </>
      }
        </Routes>
      

    </div>
        )
};


export default App;
