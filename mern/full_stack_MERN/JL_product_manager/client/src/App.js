import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import  {NotFound}  from './views/NotFound';
import { Main } from './views/Main';
import { OneProduct } from './views/OneProduct'
import { EditProduct } from './views/EditProduct'
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Navigate to='/products' replace/>}/>
          <Route path='/products' element={<Main/>}/>
          <Route path='/products/:id/edit' element={<EditProduct/>}/>
          <Route path="/products/:id" element={<OneProduct/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </>
  );
}

export default App;
