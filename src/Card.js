import React, { Component } from 'react'

const Card = (props) => {
  return (
    <div className="Card">
      <h1>Hello Cards!</h1>
      <p>Card test</p>
      {/* {console.log('props:', props.poster)} */}
      <img src={props.poster} />
    </div>
  );
}

export default Card;