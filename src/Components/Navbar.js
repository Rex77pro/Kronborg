import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import './Navbar.css' 

const MyNavbar = () => {
    const location = useLocation();

    // const getNavbarStyle = () => {
    //     switch(location.pathname) {
    //         case '/':
    //             return { bg: 'dark', variant: 'dark'};
    //         default:
    //             return {}
    //     }
    // };

    // const { bg, variant } = getNavbarStyle();

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
        <Navbar expand="lg" style={{ ...navbarStyle }} variant="dark">
            <Container>
                <Navbar.Brand href="/" style={{ color: "white" }}>
                    Min Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="uniqe-link" style={{ color: navbarStyle.color }}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/skills" className="uniqe-link" style={{ color: navbarStyle.color }}>
                            Skills
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

    // return (
    //     <Navbar expand='lg'>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">   
    //             <Nav className ='ms-auto'>
    //                 <Nav.Link href='/' className="uniqe-link">Home</Nav.Link>
    //                 <Nav.Link href='/skills' className="uniqe-link">Skills</Nav.Link>
    //             </Nav> 
    //         </Navbar.Collapse>
    //     </Navbar>
    // );
};

export default MyNavbar;