import React from 'react';
import './App.css';

import PersonComponet from './componets/MyNewComponets';
let peopleArr = [
  {'firstName':'Jane', 'lastName':'Doe', 'age':45, 'haircolor':'Black'},
  {'firstName':'John', 'lastName':'Smith', 'age':88, 'haircolor':'Brown'},
  {'firstName':'Millard', 'lastName':'Fillmore', 'age':50, 'haircolor':'Brown'},
  {'firstName':'Maria', 'lastName':'Smith', 'age':62, 'haircolor':'Brown'}
]

function App() {
  return (
    <div className="App">
      {peopleArr.map(person => {
        return <PersonComponet firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.haircolor} />
      })}
    </div>
  );
}

export default App;
