import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import { Home } from './views/Home'
import { People } from './views/People'
import { Planets } from './views/Planets'
import { NotFound } from './views/NotFound';

function App() {
    return (
      <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planets />} />
          <Route path="*" element={<NotFound/>} />
        </Routes> 
      </div>
      </>
    );
  }

  export default App;
