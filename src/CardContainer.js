import React, { Component } from 'react'
import Card from './Card'

const CardContainer = (props) => {
  const cardInfo = props.movieData.map(movie => {
    return (
      <Card id={movie.id} poster={movie.poster_path} />
    )
  })
  console.log('movies in CardContainer:\n', props.movieData)


  return (
    <div className="CardContainer">
      <h1>Hello CardContainer!</h1>
      <p>CardContainer test</p>
      {cardInfo}
    </div>
  );
}


export default CardContainer;