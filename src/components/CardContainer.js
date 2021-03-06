import React from 'react';
import Card from './Card';
import '../styles/CardContainer.css';

const CardContainer = ({ movieData, selectMovie }) => {
  const cardInfo = movieData.map(movie => {
    return (
      <Card
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        key={movie.id}
        selectMovie={selectMovie}
      />
    )
  })

  return (
    <div className="CardContainer">
      {cardInfo}
    </div>
  );
}


export default CardContainer;
