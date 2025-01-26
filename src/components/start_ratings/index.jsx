import React, { useState } from 'react';
import './styles.css';
import { FaStar } from 'react-icons/fa';

const Star_rating =({noOfStars = 5})=>{

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick =(currentIndex)=>{
        setRating(currentIndex)
  }

  const handleMouseEnter =(currentIndex)=>{
        setHover(currentIndex)
  }

  const handleMouseLeave =()=>{
    setHover(rating)
  }

  return(
    <div className="star_rating">
        {[...Array(noOfStars)].map((_,index) => {
          index += 1
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={()=>handleClick(index)}
              onMouseEnter={()=>handleMouseEnter(index)}
              onMouseLeave={()=>handleMouseLeave()}
              size={40}
             />
          )
        })}
    </div>
  )
}


export default Star_rating;