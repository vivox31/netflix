import React from 'react'
import './feature.scss'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
const Feature = ({type}) => {
    
  return (
    <div className='featured'>
        <div className="category">
            <span>{type === 'movies'?'Movies':'TV Series'}</span>
            <select name="genre" id="genre">
                <option >Genre</option>
                <option value="adventure">adventure</option>
                <option value="comedy">comedy</option>
                <option value="adventure">adventure</option>
                <option value="adventure">adventure</option>
                <option value="adventure">adventure</option>
                <option value="adventure">adventure</option>
                <option value="adventure">adventure</option>

            </select>
        </div>
    <img width="100%" src="https://getwallpapers.com/wallpaper/full/0/d/2/12468.jpg" alt="" />
    <div className="info">
        <img src="https://www.pngmart.com/files/23/Daredevil-Logo-PNG-Photo.png" alt="" />
        <span className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Nulla dolorum nesciunt consequatur facilis hic minus, necessitatibus 
        natus optio impedit iusto, delectus facere esse quibusdam amet dolore 
        magnam minima quos laborum.</span>
        <div className="buttons">
            <button className="play">
            <PlayArrow/>
            <span>play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Feature