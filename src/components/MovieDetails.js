import React, { Component } from 'react';
import '../styles/MovieDetails.css';
import { fetchSingleMovie } from '../ApiCalls.js';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {},
      hasError: false,
    }
  }


  componentDidMount() {
    const { id } = this.props
    fetchSingleMovie(id)
      .then(data => this.setState({
        movieData: data.movie
      }))
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
