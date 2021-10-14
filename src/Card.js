import React, { Component } from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      {/* {console.log('props:', props.poster)} */}
      <img src={props.poster} className='moviePoster' />
    </div>
  );
}

export default Card;