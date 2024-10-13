import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import './Navbar.css' 

const MyNavbar = () => {
    const location = useLocation();

    const getNavbarStyle = () => {
        switch(location.pathname) {
            case '/':
                return { bg: 'dark', variant: 'dark'};
            default:
                return {}
        }
    };

    const { bg, variant } = getNavbarStyle();

    return (
        <Navbar bg={bg} variant={variant} expand='lg'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">   
                <Nav className ='ms-auto'>
                    <Nav.Link href='/' className="uniqe-link">Home</Nav.Link>
                    <Nav.Link href='/skills' className="uniqe-link">Skills</Nav.Link>
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;