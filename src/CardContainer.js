import React, { Component } from 'react'
import Card from './Card'
import './CardContainer.css'

const CardContainer = (props) => {
  const cardInfo = props.movieData.map(movie => {
    return (
      <Card id={movie.id} poster={movie.poster_path} />
    )
  })
  // console.log('movies in CardContainer:\n', props.movieData)


  return (
    <div className="CardContainer">
      {cardInfo}
    </div>
  );
}


export default CardContainer;