import { Redirect } from 'react-router-dom';

export const fetchAllMovies = () => {
  return fetch('https://openlibrary.org/subjects/history.json')
    .then(results => results.json())
    .then(data => console.log(data))
};

export const fetchSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.status >= 500) {
        console.log('fetch one error\n: response status >= 500')
      } else if (!response.ok) {
        console.log('fetch two error\n: response not ok')
      } else {
        return response.json()
      }
    })
};
