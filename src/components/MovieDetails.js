import React, {Component} from 'react';
import '../styles/MovieDetails.css';
import { fetchSingleMovie } from '../ApiCalls.js';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      movieData: {},
      hasError: false,
    }
  }


  componentDidMount(id) {
    fetchSingleMovie(this.props.id)
    .then(data => this.setState({
      movieData: data.movie
    }))
  }

  // componentDidUpdate(id) {
  //   fetchSingleMovie(this.props.id)
  //   .then(data => this.setState({
  //     movieData: data.movie
  //   }))
  //   .then(() => {console.log('DidUpdate')})
  // }


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
        <div className="movie-details-container">
          <h2 className="title">{this.state.movieData.title} ({this.state.movieData.release_date})</h2>
          <img className="movieBackDrop" src={this.state.movieData.backdrop_path} alt={this.state.movieData.overview} />
          <p className="overview">{this.state.movieData.overview}</p>
        </div>
        <Link to="/">
          <button className="return-home-btn">Home</button>
        </Link>
      </div>
    )
  }

}




export default MovieDetails;
