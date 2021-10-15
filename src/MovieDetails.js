import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({selectedMovie}) => {
  return (
    <div>
      <h2>{selectedMovie.movie.title}</h2>
        <img className='movieBackDrop' src= {selectedMovie.movie.backdrop_path} alt={selectedMovie.movie.overview}/>
        <p>{selectedMovie.movie.overview}</p>
        <p>{selectedMovie.movie.release_date}</p>
    </div>
  )
}

export default MovieDetails;
