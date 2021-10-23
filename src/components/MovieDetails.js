import React, { Component } from 'react';
import '../styles/MovieDetails.css';
import { fetchSingleMovie } from '../ApiCalls.js';
import { Link, Redirect } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {},
      hasError: false
    }
  }

  componentDidMount() {
    // const { id, handleError } = this.props
    fetchSingleMovie(this.props.id)
      // .then(data => console.log('data in movieDetail after fetch:', data))
      // .then(data => this.setState({
      //   movieData: data.movie
      // }))
      .then(data => {
        if (data === undefined) {
          this.setState({
            hasError: true
          })
          console.log(this.state.hasError)
        } else {
          this.setState({
            movieData: data.movie
          })
        }
      })
      .catch(error => {
        this.props.handleError();
      })
  }


  returnHome = () => {
    this.setState(
      {
        movieData: {},
        hasError: false
      }
    )
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to="/Error" />
    }
    // return <Redirect to="/" />
    // console.log('this.state.movieData', this.state.movieData)
    const { title, release_date, backdrop_path, overview } = this.state.movieData;
    return (
      <div>
        <div className="movie-details-container">
          <h2 className="title">{title} ({release_date})</h2>
          <img className="movieBackDrop" src={backdrop_path} alt={overview} />
          <p className="overview">{overview}</p>
        </div>
        <Link to="/">
          <button className="return-home-btn">Home</button>
        </Link>
      </div>
    )

  }

}


export default MovieDetails;
