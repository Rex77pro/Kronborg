import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import './Navbar.css' 

const MyNavbar = () => {
    const location = useLocation();

    const getNavbarStyle = () => {
        switch (location.pathname) {
            case "/":
                return { backgroundColor: "#007bff", color: "white" }; // Primær farve til forsiden
            case "/skills":
                return { backgroundColor: "#6c757d", color: "white" }; // Sekundær farve
            default:
                return { backgroundColor: "#343a40", color: "white" }; // Standard mørk farve
        }
    };

    const navbarStyle = getNavbarStyle();

    return (
        <Navbar style={{ ...navbarStyle }} variant="dark" className="vertical-navbar">
            {/* Vi bruger ikke Container her, så alt bliver lodret */}
            <Navbar.Brand href="/" style={{ color: "white", textAlign: "center", width: "100%" }}>
                Portfolio
            </Navbar.Brand>
            <Nav className="flex-column" style={{ width: "100%" }}> {/* Sørg for at links er vertikale */}
                <Nav.Link href="/" className="uniqe-link" style={{ color: navbarStyle.color }}>
                    Home
                </Nav.Link>
                <Nav.Link href="/skills" className="uniqe-link" style={{ color: navbarStyle.color }}>
                    Skills
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default MyNavbar;