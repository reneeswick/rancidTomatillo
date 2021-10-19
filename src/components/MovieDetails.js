import React from 'react';
import '../styles/MovieDetails.css';
import { fetchSingleMovie } from '../ApiCalls.js'

const MovieDetails = ({ id, returnHome }) => {
  let movieData = ""
  let movieInfo = fetchSingleMovie(id)
    .then(data => movieData = data.movie)
    .then(() => console.log('movieData', movieData.title))

  return (
    <div>
      <div className="movie-details-container">
        <h2 className="title">{movieData.title} ({movieData.release_date})</h2>
        <img className="movieBackDrop" src={movieData.backdrop_path} alt={movieData.overview} />
        <p className="overview">{movieData.overview}</p>
      </div>
      <button className="return-home-btn" onClick={() => { returnHome() }}>Home</button>
    </div>
  )
}

export default MovieDetails;
