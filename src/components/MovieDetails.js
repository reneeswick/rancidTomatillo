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
    const { title, release_date, backdrop_path, overview, tagline } = this.state.movieData;
    return (
      <div>
        <section className="movie-back-drop" style={{ backgroundImage: `url(${backdrop_path})` }}>
          <section className="movie-details-container">
            <h2 className="title">{title}</h2>
            <h3 className="release-date">(Released: {release_date}) </h3>
            <h3 className="tagline">{tagline}</h3>
            <p className="overview">{overview}</p>
          </section>
          <Link to="/">
            <button className="return-home-btn">Home</button>
          </Link>
        </section>
      </div >
    )
  }
}

export default MovieDetails;
