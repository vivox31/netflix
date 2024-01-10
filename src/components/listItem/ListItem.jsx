import React, { useState } from 'react'
import './ListItem.scss'
import { PlayArrow, ThumbUpOutlined,ThumbDownAltOutlined, Add } from '@mui/icons-material'
const trailer = 'C://Users/VISHAL/Downloads/trailer-blackWidow';
const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='listItem'
     onMouseEnter={()=>setIsHovered(true)} 
     onMouseLeave={()=>setIsHovered(false)}
     style={{left:isHovered && (index*255 - 50 + index*2.5)}}>
      <img src="https://wallpapercave.com/wp/wp9164084.jpg" alt="" />

    {isHovered && (
      <>
      <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>        
            <Add/>
         <ThumbUpOutlined/>
         <ThumbDownAltOutlined/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 4 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae voluptatibus a omnis aliquid laborum dolorem, fugiat cupiditate dicta eaque 
        repudiandae odit </div>
        <div className="genre">Action</div>
      </div>
      </>
    )}
    </div>
  )
}

export default ListItem