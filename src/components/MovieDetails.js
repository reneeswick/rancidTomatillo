import React, {Component} from 'react';
import '../styles/MovieDetails.css';
import { fetchSingleMovie } from '../ApiCalls.js'

class MovieDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      movieData: {},
      hasError: false,
    }
  }

  componentDidUpdate(id) {
    fetchSingleMovie(this.props.id)
    .then(data => this.setState({
      movieData: data.movie
    }))
  }

  componentDidMount(id) {
    fetchSingleMovie(this.props.id)
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
    return (
      <div>
        {console.log(this.state.movieData)}
        <div className="movie-details-container">
          <h2 className="title">{this.state.movieData.title} ({this.state.movieData.release_date})</h2>
          <img className="movieBackDrop" src={this.state.movieData.backdrop_path} alt={this.state.movieData.overview} />
          <p className="overview">{this.state.movieData.overview}</p>
        </div>
        <button className="return-home-btn" onClick={() => { this.returnHome() }}>Home</button>
      </div>
    )
  }

}




export default MovieDetails;
