import React from 'react';

const MovieDetails = ({selectedMovie}) => {
  console.log('MovieDetails props', selectedMovie.movie)
  return (
    <div>
      <h2>{selectedMovie.movie.title}</h2>
        <img src= {selectedMovie.movie.backdrop_path} alt={selectedMovie.movie.title} />
    </div>
  )
}

export default MovieDetails;
