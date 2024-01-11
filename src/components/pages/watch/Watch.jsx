import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import './Watch.scss'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            <span>Home</span>
        </div>
        <video className='video' src={require('../../../videos/trailer-blackWidow.mp4')}
         autoPlay progress controls>
        </video>
    </div>
  )
}

export default Watch