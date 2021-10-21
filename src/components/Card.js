import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom';

const Card = ({ id, poster, title }) => {
  return (
    <Link to={`/${id}`} className='Card'>
      <img src={poster}
        alt={title}
        className='moviePoster'
        id={id}
      />
    </Link>
  );

}

export default Card;
