import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
