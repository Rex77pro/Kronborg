import React from 'react';
//import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Components/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import SkillPage from './Pages/SkillsPage/SkillsPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <MyNavbar />  {/* Navbar til højre */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
