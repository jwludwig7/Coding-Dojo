import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import { Main } from './views/Main';
import { EditPet } from './views/EditPet';
import { OnePet } from './views/OnePet';
import { NewPet } from './views/NewPet';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/pets' replace/>}/>
        <Route path='/pets' element={<Main/>}/>
        <Route path='/pets/new' element={<NewPet/>}/>
        <Route path='/pets/:id/edit' element={<EditPet/>}/>
        <Route path='/pets/:id' element={<OnePet/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
