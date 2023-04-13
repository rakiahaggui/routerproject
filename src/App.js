import React from 'react';
import './styles.css';
import NavBar from './Component/NavBar';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Homy';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path="/myhome" element={<Home />} />

  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
