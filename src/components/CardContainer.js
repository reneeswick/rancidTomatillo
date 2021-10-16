import React from 'react'
import Card from './Card'
// import MovieDetails from './MovieDetails'
import '../styles/CardContainer.css'

const CardContainer = (props) => {
  const cardInfo = props.movieData.map(movie => {
    return (
      <Card
        id={movie.id}
        poster={movie.poster_path}
        key={movie.id}
        selectMovie={props.selectMovie}
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
