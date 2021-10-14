import React, { Component } from 'react'
import movieData from './movieData.js';
import CardContainer from './CardContainer.js';
import Card from './Card.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div>
        {/* {console.log(this.state.movies[1])} */}
        <CardContainer movieData={this.state.movies} />
      </div>
    );
  }
}

export default App;
