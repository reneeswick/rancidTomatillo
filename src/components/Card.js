import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <Link to= {`/${props.id}`} className='Card'>
      <img src={props.poster}
        alt={props.title}
        className='moviePoster'
        id={props.id}
      />
    </Link>
  );

}

export default Card;
