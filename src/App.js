import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SkillPage from './Pages/SkillsPage';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' />
          <Nav classname='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/skills'>Skills</Nav.Link>
          </Nav>
      </Navbar>
      <Routes>
        <Route path='/' element={< HomePage/>} />
        <Route path='/Skills' element={< SkillPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
