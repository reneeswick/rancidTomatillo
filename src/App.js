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
      selectedMovie: {},
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

  selectMovie = (id) => {
    this.setState({ movieIsSelected: true })
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(results => results.json())
      .then(data =>
        this.setState({
          selectedMovie: data.movie
        }))
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
            selectMovie={this.selectMovie}
          />
        }
      </div>
    );
  }
}

export default App;
