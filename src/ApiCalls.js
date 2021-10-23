//original

// export const fetchAllMovies = () => {
//   return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
//     .then(results => results.json())
// };

// export const fetchSingleMovie = (id) => {
//   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//     .then(results => results.json())
// };



///////////////////////

// export const fetchAllMovies = () => {
//   return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
//     .then(results => results.json())
// };

// export const fetchSingleMovie = (id) => {
//   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//     .then(response => console.log('response in fetch', response))
//   // .then(response => this.checkForError)
// };

// export const checkForError = (response) => {
//   if (response.status >= 500) {
//     console.log('fetch one')
//     return "Our servers are down."
//   } else if (!response.ok) {
//     console.log('fetch two')
//     return "Something went wrong."
//   } else {
//     console.log('fetch three')
//     console.log('response here:', response)
//     return response.json()
//   }
// };


//////////////////
// import Error from './components/Error';
// import { Redirect } from 'react-router-dom';

// export const fetchAllMovies = () => {
//   return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
//     .then(results => results.json())
// };

// export const fetchSingleMovie = (id) => {
//   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//     .then(response => {
//       if (response.status >= 500) {
//         console.log('fetch one error\n: response status >= 500')
//         return "Our servers are down. Please try again later."
//       } else if (!response.ok) {
//         console.log('fetch two error\n: response not ok')
//         return <Redirect to="/Error" />
//       } else {
//         console.log('fetch three')
//         console.log('response is good!\n', response)
//         return response.json()
//       }
//     })
// };



////////////
//////////////////
import { Redirect } from 'react-router-dom';

export const fetchAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(results => results.json())
};

export const fetchSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.status >= 500) {
        console.log('fetch one error\n: response status >= 500')
      } else if (!response.ok) {
        console.log('fetch two error\n: response not ok')
      } else {
        console.log('fetch three: response is good!\n', response)
        return response.json()
      }
    })
};

