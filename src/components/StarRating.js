

import { useState } from 'react';
import Star from './Star';
import starData from '../assets/datasets/starDataset';

export default function StarRating() {

  const [rating, setRating] = useState(0); 
  const [filledStars, setFilledStars] = useState(0); 

  //Easy fix, with empty spot
  const ratingTitle = ['','Abysmal','Mediocre','Okay','Good','Fantastic']

  function updateRating(selectedRating) {
    setRating(selectedRating);
    setFilledStars(selectedRating);
  }

  return (
    <div >
      <h1>Your Rating</h1>
      <div className='starRatingContainer'>
        {starData.map((index) => (
          <Star
            key={index}
            // Clear previous rating if less than
            className={index <= rating ? 'filled' : 'unfilled'} 
            //ChatGTP, no idea why I need function()
            onClick={function() {updateRating(index)}}
          ></Star>
        ))}
      </div>
      <h2 className='starRatingTitle'>{ratingTitle[filledStars]}</h2>
    </div>
  )
}

