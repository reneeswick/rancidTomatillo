import React, { Component } from 'react'
import movieData from './movieData.js';
import CardContainer from './CardContainer.js';
// import Card from './Card.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie: {"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}
    }
  }


  render() {
    return (
      <div>
        <header>
          <h1>Movie time</h1>
        </header>
        <CardContainer movieData={this.state.movies} selectedMovie={this.state.selectedMovie} />
      </div>
    );
  }
}

export default App;
