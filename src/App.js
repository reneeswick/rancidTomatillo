import React, { Component } from 'react'
import movieData from './movieData.js';
import CardContainer from './CardContainer.js';
import Card from './Card.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      greeting: 'hello'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}!</h1>
        {console.log(this.state.movies[1])}
        <CardContainer />
      </div>
    );
  }
}

export default App;
