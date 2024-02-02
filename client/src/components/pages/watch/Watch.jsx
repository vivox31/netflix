import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import './Watch.scss'
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  console.log(location.state)
  const movie = {
    "_id": "65bb7872c0856d68ef475238",
    "title": "Thor love and thunder",
    "desc": "Thor starts to raise Gorr's daughter as his own, entrusting her with Stormbreaker while he wields Mjølnir into battle. The two begin travelling the galaxy offering assistance to whomever needs it, becoming known as Love and Thunder.",
    "img": "https://firebasestorage.googleapis.com/v0/b/netflix-473d0.appspot.com/o/items%2F1706784769832imgthor-walpaper.jpg?alt=media&token=35d04c04-4804-4f7e-b668-ba712433cdfa",
    "imgTitle": "https://firebasestorage.googleapis.com/v0/b/netflix-473d0.appspot.com/o/items%2F1706784769833imgTitlethor-logo.png?alt=media&token=d4035d39-bd94-4503-9b7c-56aad6661b17",
    "imgSm": "https://firebasestorage.googleapis.com/v0/b/netflix-473d0.appspot.com/o/items%2F1706784769833imgSmthor-walpaper.jpg?alt=media&token=88cf0079-421b-4e9e-8d6f-a02214b8c205",
    "trailer": "https://firebasestorage.googleapis.com/v0/b/netflix-473d0.appspot.com/o/items%2F1706784769833trailerMarvel%20Studios'%20Thor_%20Love%20and%20Thunder%20_%20Official%20Trailer%20(360p).mp4?alt=media&token=1e2fb9e9-80a1-4a67-a919-48acb9ee03cf",
    "video": "https://firebasestorage.googleapis.com/v0/b/netflix-473d0.appspot.com/o/items%2F1706784769833videoMarvel%20Studios'%20Thor_%20Love%20and%20Thunder%20_%20Official%20Trailer%20(360p).mp4?alt=media&token=93a5f2e3-b824-4480-835f-95095f80896d",
    "limit": "13+",
    "genre": "action",
    "isSeries": false,
    "__v": 0
}
  // console.log(movie);


  return (
    <div className='watch'>
      <Link to='/' >
        <div className="back">
            <ArrowBackOutlined/>
            <span>Home</span>
        </div>
        </Link>
        <video className='video' src={movie.trailer}
         autoPlay progress controls>
        </video>
    </div>
  )
}

export default Watch