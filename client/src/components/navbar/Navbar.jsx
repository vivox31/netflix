import {React,useContext,useState} from 'react'
import './Navbar.scss'
import { Search ,  Notifications, ArrowDropDown } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions'
const Navbar = () => {
    const [isscrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);

    window.onscroll =  ()=>{
        setIsScrolled(window.scrollY === 0?false:true);
       return ()=>(window.onscroll = null);
    }

  return (
    <div className={isscrolled?'navbar scrolled':'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://www.whatphone.net/wp-content/uploads/2019/05/Netflix-Logo.png" alt="" />

              <Link to="/" className='link'>
                <span>HomePage</span>
                </Link>
                <Link to="/series" className='link'>
                <span>Series</span>
                </Link>
                <Link to='/movies' className='link' >
                <span>Movies</span>
                </Link>
                
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>kid</span>
                <Notifications className='icon'/>
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile.png" alt="" />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span onClick={()=>dispatch(logout())}>Logout</span>
                </div>
                </div>
                
            </div>
        </div>
    </div>




  )
}

export default Navbar