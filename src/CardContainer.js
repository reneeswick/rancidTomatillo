import React, { Component } from 'react'
import Card from './Card'
import MovieDetails from './MovieDetails'
import './CardContainer.css'

const CardContainer = (props) => {
  const cardInfo = props.movieData.map(movie => {
    return (
      <Card
      id={movie.id}
      poster={movie.poster_path}
      key={movie.id}
      />
    )
  })

  const selectedMovie = (props) => {
    return (
      <MovieDetails
      key={props.selectedMovie.movie.id}
      title={props.selectedMovie.movie.title}
      releaseDate={props.selectedMovie.movie.release_date}
      overview={props.selectedMovie.movie.overview}
      rating={props.selectedMovie.movie.average_rating}
      // genre={props.selectedMovie.movie.genres[...genres]}
      budget={props.selectedMovie.movie.budget}
      revenue={props.selectedMovie.movie.revenue}
      />
    )
  }

  return (
    <div className="CardContainer">
      {cardInfo}
      {selectedMovie}
    </div>
  );
}


export default CardContainer;
