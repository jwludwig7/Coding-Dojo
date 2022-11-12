import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {Home} from './views/Home';
import {IdPage} from './views/IdPage';
import {Word} from './views/Word';
import {WordCustom} from './views/WordCustom';



function App() {
  return (
    <div className="App">
      {/* <Link to='/home'>
      
      </Link> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:id' element={<IdPage/>}/>
        <Route path='/word/:word' element={<Word/>}/>
        <Route path='/:word/:xcolor/:color' element={<WordCustom />}/>

      </Routes>
    </div>
  );
}

export default App;
