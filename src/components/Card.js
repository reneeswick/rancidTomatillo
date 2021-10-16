import React from 'react'
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.poster}
        alt={props.title}
        className='moviePoster'
        id={props.id}
        onClick={
          () => {
            props.selectMovie(props.id)
          }
        }
      />
    </div>
  );

}

export default Card;
