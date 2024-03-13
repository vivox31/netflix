import { ArrowBackOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Watch.scss'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';

const Watch = () => {
  const location = useLocation();
  // console.log(location)
  const [movie, setMovie] = useState({});
  useEffect(() => {

    const getMovie = async()=>{
    let url = location.pathname;
    url = url.split('/')
    let movieid = url[2];
    
    try {
      const res = await axios.get(`https://netflix-1ibe.onrender.com/api/movie/find/${movieid}`, { headers: { token: "bearer " + JSON.parse(localStorage.getItem('user')).accesstoken } })
      setMovie(res.data);
      // console.log(movie);
    } catch (error) {
      console.log(error);
    }
  }
  getMovie();
  console.log(movie)
  }, [])





  return (
    <div className='watch'>
      <Link to='/' >
        <div className="back">
          <ArrowBackOutlined />
          <span>Home</span>
        </div>
      </Link>
      <video className='video' src={movie.video}
        autoPlay progress controls>
      </video>
    </div>
  )
}

export default Watch