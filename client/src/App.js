import React, { useContext } from 'react'
import './App.scss'
import Home from './components/Home/Home'
import Watch from './components/pages/watch/Watch'
import Register from './components/pages/register/Register'
import Login from './components/pages/Login/Login'

import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import {AuthContext} from './authContext/AuthContext'


export default function App() {
  const {user,dispatch} = useContext(AuthContext)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={ user ? <Home/>: <Navigate to="/Register"/>}> </Route>
    <Route path='/Register' element={ !user ? <Register/>: <Navigate to="/"/> } >  </Route>
      <Route path='/login' element={ !user ? <Login/>: <Navigate to="/"/> } >  </Route>
      {user &&   (<>  
      <Route path='/movies' element={<Home type="movie" />}>  </Route>
      <Route path='/series' element={<Home type="series" />} >  </Route>
      <Route path='/watch/:id' element={ <Watch/> } >  </Route>
      </>) 
    }
  

    </Routes>
    </BrowserRouter>
    
    {/* <Watch/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    </>
  )
}
