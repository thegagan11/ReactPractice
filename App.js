import React from 'react';
import Person from './Person';

function App() {
  const people = [
    { name: 'Alice', age: 25, hobbies: ['Reading', 'Hiking'] },
    { name: 'Bob', age: 17, hobbies: ['Gaming', 'Cooking'] },
    { name: 'Charlie', age: 30, hobbies: ['Painting', 'Traveling'] },
  ];

  return (
    <div>
      {people.map((person, index) => (
        <Person key={index} name={person.name} age={person.age} hobbies={person.hobbies} />
      ))}
    </div>
  );
}

export default App;
