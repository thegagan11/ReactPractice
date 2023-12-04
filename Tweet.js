import React from 'react';
import './Tweet.css';

function Tweet(props) {
  return (
    <div className="tweet">
      <h3>{props.username}</h3>
      <p>{props.name} · {props.date}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default Tweet;
