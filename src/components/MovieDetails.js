import React from 'react';
import '../styles/MovieDetails.css';

const MovieDetails = ({ selectedMovie, returnHome }) => {

  return (
    <div>
      <div className="movie-details-container">
        <h2 className="title">{selectedMovie.title} ({selectedMovie.release_date})</h2>
        <img className="movieBackDrop" src={selectedMovie.backdrop_path} alt={selectedMovie.overview} />
        <p className="overview">{selectedMovie.overview}</p>
      </div>
      <button className="return-home-btn" onClick={() => { returnHome() }}>Home</button>
    </div>
  )
}

export default MovieDetails;
