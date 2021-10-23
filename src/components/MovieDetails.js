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
    fetchSingleMovie(this.props.id)
      .then(data => {
        if (data === undefined) {
          this.setState({
            hasError: true
          })
        } else {
          this.setState({
            movieData: data.movie
          })
        }
      })
      .catch(error => {
        console.log(error);
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
    const { title, release_date, backdrop_path, overview } = this.state.movieData;
    return (
      <div>
        <section className="movie-background-img">
          <img className="movieBackDrop" src={backdrop_path} alt={`background of ${title}`} />
          <div className="movie-details-container">
            <h2 className="title">{title} ({release_date})</h2>
            <p className="overview">{overview}</p>
          </div>
        </section>
        <Link to="/">
          <button className="return-home-btn">Home</button>
        </Link>
      </div>
    )
  }
}


export default MovieDetails;
