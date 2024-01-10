import { ArrowBackIosOutlined, ArrowForwardIosOutlined, SlideshowSharp } from '@mui/icons-material'
import React, { useRef ,useState} from 'react'
import ListItem from '../listItem/ListItem'
import './List.scss'

const List = () => {

  const listRef = useRef();
  const [ismoved, setIsMoved] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  const handleClick = (direction)=>{
    setIsMoved(true)
  let distance = listRef.current.getBoundingClientRect().x - 50;
      if(direction === 'left' && slideNumber > 0 ){
        setSlideNumber(slideNumber - 1)
          listRef.current.style.transform = `translateX(${distance + 240}px)`
      }
      if(direction === 'right' && slideNumber < 5 ){
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${distance - 240}px)`
    }
  }
  return (
    <div className="list">
        <span className="listTitle">continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined  onClick = {()=>handleClick('left')} className='sliderArrow left' style={{display: !ismoved && 'none'}}/>
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined onClick = {()=>handleClick('right')} className='sliderArrow right' />
        </div>
    </div>
  )
}

export default List