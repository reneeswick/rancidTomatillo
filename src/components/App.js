import React, { Component } from 'react'
import CardContainer from './CardContainer.js';
import MovieDetails from './MovieDetails.js';
import { fetchAllMovies, fetchSingleMovie } from '../ApiCalls.js'
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      movieIsSelected: false,
      hasError: false
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(data =>
        this.setState({
          movies: data.movies
        })
      )
      .catch(error => {
        console.log('Error all movies:', error)
        this.setState({
          hasError: true
        })
      })
  }

  selectMovie = (id) => {
    this.setState({ movieIsSelected: true })
    fetchSingleMovie(id)
      .then(data =>
        this.setState({
          selectedMovie: data.movie
        })
      )
      .catch(error => {
        console.log('Error in movie detail:', error)
        this.setState({
          hasError: true
        })
      })
  }

  returnHome = () => {
    this.setState({
      movieIsSelected: false,
      selectedMovie: {},
      hasError: false
    })
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1 className="page-title">Movie time</h1>
        </header>
        {this.state.hasError && <h2 className="error-message">There is an error with the server, please try again.</h2>}
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
