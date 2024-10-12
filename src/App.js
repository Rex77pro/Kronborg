import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SkillPage from './Pages/SkillsPage';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={< HomePage/>} />
        <Route path='/Skills' element={< SkillPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
