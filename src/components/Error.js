import React from 'react';
import '../styles/Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1 className="error">Uh oh -- There's been a blooper!</h1>
      <p className="error-msg">We're sorry. There's been an error.</p>
      <img className="blooper-img" src="https://i.ytimg.com/vi/pvm6avc8Zwo/maxresdefault.jpg" alt= "multi-colored, vertical lines from classic blooper reels"/>
      <p className="error-instr">Visit our home page or try again later.</p>
      <Link to="/" className="link"> Click here to go home </Link>
    </div>
  )
}

export default Error;
