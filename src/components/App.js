import React, { Component } from 'react'
import CardContainer from './CardContainer.js';
import MovieDetails from './MovieDetails.js';
import { fetchAllMovies, fetchSingleMovie } from '../ApiCalls.js'
import '../styles/App.css';
import Error from './Error.js'
import { Route, Switch, Redirect } from 'react-router-dom';

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
        console.log('Error getting all movies:', error)
        this.setState({
          hasError: true
        })
      })
  }

  handleError = () => {
    <Redirect to="/Error" />
    console.log('handle error in app');
  }

  // selectMovie = (id) => {
  //   this.setState({ movieIsSelected: true })
  //   fetchSingleMovie(id)
  //     .then(data =>
  //       this.setState({
  //         selectedMovie: data.movie
  //       })
  //     )
  //     .catch(error => {
  //       console.log('Error in app fetch:', error)
  //       this.setState({
  //         hasError: true
  //       })
  //     })
  // }

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
        {this.state.hasError && <h2>There is an error with the server, please try again.</h2>}
        <Switch>

          <Route exact path="/" render={() =>
            <CardContainer
              movieData={this.state.movies}
              selectedMovie={this.state.selectedMovie}
              selectMovie={this.selectMovie}
            />
          }
          />
          <Route path="/:id" render={({ match }) =>
            <MovieDetails
              id={match.params.id}
              handleError={this.handleError}
            />
          }
          />
          {/* <Redirect to="/error" /> */}
          <Route exact path="/Error" render={() => {
            <Error />
          }} />
          <Route />
        </Switch>
      </div >
    );
  }
}

export default App;
