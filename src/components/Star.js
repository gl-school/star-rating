


import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Props!

export default function Star(props){

  return (
    <div
      className={`star ${props.className}`} 
      onClick={props.onClick}>
      <FontAwesomeIcon className='starIcon' icon={faStar}></FontAwesomeIcon>
    </div>
  )
}





