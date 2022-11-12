import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard';
// let peopleArr = [
//   {'firstName':'Jane', 'lastName':'Doe', 'age':45, 'haircolor':'Black'},
//   {'firstName':'John', 'lastName':'Smith', 'age':88, 'haircolor':'Brown'},
//   {'firstName':'Millard', 'lastName':'Fillmore', 'age':50, 'haircolor':'Brown'},
//   {'firstName':'Maria', 'lastName':'Smith', 'age':62, 'haircolor':'Brown'}
// ]

function App() {
  return (
    <div className="App">
      {/* {peopleArr.map(person => {
        return <PersonComponet firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.haircolor} />
      })} */}
      <PersonCard firstName="Jane" lastName="Doe" age={45} hiarColor="Black"/>
      <PersonCard firstName="John" lastName="Smith" age={88} hiarColor="Brown"/>
      <PersonCard firstName="Millard" lastName="Smith" age={50} hiarColor="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age={62} hiarColor="Brown"/>
    </div>
  );
}

export default App;
