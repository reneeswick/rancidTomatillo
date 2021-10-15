import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.poster}
      className='moviePoster'
      id= {props.id}
      onClick= {
        () => {
          props.movieIsSelected()
        }
      }
      />
    </div>
  );

}

export default Card;
