import {React,useRef,useState} from 'react'
import './Register.scss'

const Register = () => {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("")
    const emailref = useRef();
    const passwordref = useRef();
   const handleStart = ()=>{
        setEmail(emailref.current.value);
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img src={require('../../../pngimg.com - netflix_PNG25.png')} alt="" />
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
        {!email?
        <div className="input">
            <input type="email"  placeholder='email address' ref={emailref} />
            <button onClick={handleStart}  className='ragister-btn'>get started</button>
        </div>:
             <form className="input">
             <input type="password" ref={passwordref} placeholder='Password' />
             <button onClick={handleStart}  className='ragister-btn'>start</button>
         </form>
        }
        </div>
    </div>
  )
}

export default Register