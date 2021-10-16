import React from 'react';
import '../MovieDetails.css';

const MovieDetails = ({ selectedMovie, returnHome }) => {

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
        <button onClick={() => {returnHome()}}>Home</button>
        <img className='movieBackDrop' src= {selectedMovie.backdrop_path} alt={selectedMovie.overview}/>
        <p>{selectedMovie.overview}</p>
        <p>{selectedMovie.release_date}</p>
    </div>
  )
}

export default MovieDetails;
