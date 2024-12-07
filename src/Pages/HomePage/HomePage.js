import React from "react";
import "./HomePage.css"; 
import { Container} from "react-bootstrap";
import { Typography } from "@mui/material";

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="header">
                <Container>
                    <Typography variant="h4" style={{ color: "white", textAlign: "center" }}>
                        Velkommen til Min Portfolio
                    </Typography>
                </Container>
            </header>
        </div>
    );
};

export default HomePage;

