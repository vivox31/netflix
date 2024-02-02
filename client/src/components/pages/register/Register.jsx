import {React,useRef,useState} from 'react'
import './Register.scss'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("")
    const [username, setUsername] = useState("");
    const emailref = useRef();
    const passwordref = useRef();
    const usernameRef = useRef();
  const navigate = useNavigate();

   const handleStart = ()=>{
        setEmail(emailref.current.value); 
    }
   const handleFinish = async(e)=>{
    e.preventDefault();
    setPassword(passwordref.current.value);
    setUsername(usernameRef.current.value);
    try{
        const res = await axios.post("http://localhost:8800/api/auth/register", 
        {username: username,
        email: email,
        password: Password});
        navigate('/login');
    }catch(err){
        console.log(err);
    }
   }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img src={require('../../../pngimg.com - netflix_PNG25.png')} alt="" />
            <Link to="/login" >
            <button className="loginButton">Sign In</button>
            </Link>
            
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
             <input type="text" ref={usernameRef} placeholder='userName' />
             <input type="password" ref={passwordref} placeholder='Password' />
             <button onClick={handleFinish}  className='ragister-btn'>start</button>
         </form>
        }
        </div>
    </div>
  )
}

export default Register