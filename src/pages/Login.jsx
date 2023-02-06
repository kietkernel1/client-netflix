import React from 'react'
import "../scss/login.scss"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { processLogin } from "../callApi/processLogin"
import { useSelector } from 'react-redux';
const Login = () => {
  const { error } = useSelector( state => state.userReducer)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = async data => {
    await processLogin(data)
    navigate("/")
  };

  return (
    <div className='login-container'>
        <Link to="/">
        <div className='login-navbar'>
        <img src="https://firebasestorage.googleapis.com/v0/b/shop-cart-8f373.appspot.com/o/Netflix_logo.svg.png?alt=media&token=cad434be-6be7-4fe8-ab5c-31593e90ac7a" alt="" />
        </div>
        </ Link>
        <div className='login-form'>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type='text' {...register("username", { required: true}) } placeholder="Enter your username"/>
                {errors.username && <span style={{ color: "red", textAlign: "center"}}>Don't be blank!!!</span>}
                <input type="password" {...register("password", { required: true })} placeholder="Password"/>
                
                {errors.password && <span style={{ color: "red", textAlign: "center"}}>Don't be blank!!!</span>}
                {error && <span style={{color: "red", textAlign: "center"}}> {error}</span>}
                <input type="submit" value="Sign in" />
            </form>
        <h3>New to Netflix? <Link to='/register'>Sign up now</Link></h3>
        </div>
    </div>
  )
}

export default Login