import {React,useContext,useRef,useState} from 'react'
import './Login.scss'
import { login } from '../../../authContext/apiCalls'
import {AuthContext} from "../../../authContext/AuthContext"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch} = useContext(AuthContext);
    const handlesubmit = async (e)=>{
        e.preventDefault();
       login({email,password},dispatch)
    }

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
            <input type="email" placeholder='Email or phone number' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Passoword'onChange={e=>setPassword((e).target.value)} />
            <button className="loginButton" onClick={handlesubmit}>
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