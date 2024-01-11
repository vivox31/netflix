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
        <video className='video' autoPlay loop src={require('../../videos/trailer-blackWidow.mp4')}/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className='icon'/>        
            <Add className='icon'/>
         <ThumbUpOutlined className='icon'/>
         <ThumbDownAltOutlined className='icon'/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 4 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ducimus iste deleniti provident hic</div>
        <div className="genre">Action</div>
      </div>
      </>
    )}
    </div>
  )
}

export default ListItem