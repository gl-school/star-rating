


import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Star(props){
  return (
    <div
      //Should change className to filled or unfilled
      className={`star ${props.className}`} 
      //Gives function to button, in StarRating
      onClick={props.onClick}>
      <FontAwesomeIcon className='starIcon' icon={faStar}></FontAwesomeIcon>
    </div>
  )
}





