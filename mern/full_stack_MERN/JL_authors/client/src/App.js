import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import { Main } from './views/Main'
import { NewAuthor } from './views/NewAuthor'
import { EditAuthor } from './views/EditAuthor'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Navigate to='/authors' replace/>}/>
        <Route path='/authors' element={<Main/>}/>
        <Route path='/authors/new' element={<NewAuthor/>}/>
        <Route path='/authors/:id/edit' element={<EditAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
