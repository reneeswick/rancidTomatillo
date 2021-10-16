import React, { Component } from 'react'
// import movieData from './movieData.js';
import CardContainer from './CardContainer.js';
import MovieDetails from './MovieDetails.js';
// import Card from './Card.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: { "movie": { id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget: 63000000, revenue: 100853753, runtime: 139, tagline: "It's a movie!" } },
      movieIsSelected: false
    }
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(results => results.json())
      .then(data =>
        this.setState({
          movies: data.movies
        })
      )
  }

  selectMovie = () => {
    this.setState({ movieIsSelected: true })
  }

  returnHome = () => {
    this.setState({
      movieIsSelected: false,
      selectedMovie: {}
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Movie time</h1>
        </header>
        {this.state.movieIsSelected && <MovieDetails selectedMovie={this.state.selectedMovie} returnHome={this.returnHome} />}
        {!this.state.movieIsSelected &&
          <CardContainer
            movieData={this.state.movies}
            selectedMovie={this.state.selectedMovie}
            movieIsSelected={this.selectMovie}
          />
        }
      </div>
    );
  }
}

export default App;
