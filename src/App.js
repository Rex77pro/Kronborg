import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import SkillPage from './Pages/SkillsPage';
import './App.css';


function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path='/' element={< HomePage/>} />
        <Route path='/Skills' element={< SkillPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
