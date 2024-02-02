import React, { useEffect, useState } from 'react'
import './ListItem.scss'
import { PlayArrow, ThumbUpOutlined, ThumbDownAltOutlined, Add } from '@mui/icons-material'
import axios from 'axios';
import { Link } from "react-router-dom";



const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/movie/find/" + item,
          {
            headers: { token: "bearer " + JSON.parse(localStorage.getItem('user')).accesstoken }
          });
        setMovie(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMovie();
  }, [item])
  return (
  
    
      <Link to={{pathname:"/watch/" + movie._id, state:{data:'vishal'}}}>
      <div className='listItem'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && (index * 255 - 50 + index * 2.5) }}>
        <img src={movie.img} alt="" />

        {isHovered && (
          <>
            <video className='video' autoPlay loop src={movie.trailer} />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className='icon' />
                <Add className='icon' />
                <ThumbUpOutlined className='icon' />
                <ThumbDownAltOutlined className='icon' />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 4 mins</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default ListItem