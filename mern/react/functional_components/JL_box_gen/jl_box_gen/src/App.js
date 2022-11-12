import {useState} from 'react'
import './App.css';
// import Display from './components/Display';
import Box from './components/Box';
import Form from './components/Form';

function App() {

  // const [boxes, setBoxes] = useState(["red", "green", "blue"]);

  // another way

  const [boxes, setBoxes] = useState([
    {color: "red"}, 
    {color:"green"}, 
    {color: "blue"}
  ]);

  const addBoxColor = (colorObj) => {
    console.log("hello we got", colorObj)
    // add the colorName we got from the form
    setBoxes([...boxes, colorObj])
  }

  return (
    <div className="App">
      <h1>Boxes</h1>
      <hr/>
      <Form addBoxColor={addBoxColor}/>
      {/* {JSON.stringify(boxes)} */}
      {/* <p>
        mapping over our state
      </p> */}
      {/* <Display boxes={boxes}/> */}
      {
        boxes.map((eachBox, idx) => {
          return <Box key={idx} boxObj={eachBox}/>
        })
      }
    </div>
  );
}


export default App;