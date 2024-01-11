import {React,useRef,useState} from 'react'
import './Login.scss'

const Login = () => {
    
  return (
    <div className='Login'>
        <div className="top">
            <div className="wrapper">
            <img src={require('../../../pngimg.com - netflix_PNG25.png')} alt="" />
            </div>
        </div>
        <div className="container">
            <form action="">
            <h1>Sign In</h1>
            <input type="email" placeholder='Email or phone number'/>
            <input type="password" placeholder='Passoword' />
            <button className="loginButton">
                Sign In
            </button>
            <span>
                New to Netflix ? <b>Sign Up now </b>
            </span>
            <small>This Page is protected by Google reCAPTCHA to ensure you're not a robot.<b>Learn More</b> </small>
            </form>
        </div>
        
    </div>
  )
}

export default Login