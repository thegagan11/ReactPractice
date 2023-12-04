import React from 'react';

function Person(props) {
  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{props.age >= 18 ? 'Please go vote!' : 'You must be 18'}</h3>
      <h2>{props.name.length > 8 ? props.name.substring(0, 6) : props.name}</h2>
      <ul>
        {props.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default Person;
