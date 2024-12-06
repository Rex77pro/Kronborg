import React from "react";
import "./HomePage.css"; 
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";

const HomePage = () => {
    return (
        <div className="homepage">
            <header style={{ backgroundColor: "#007bff", padding: "1rem" }}>
                <Container>
                    <Typography variant="h4" style={{ color: "white", textAlign: "center" }}>
                        Velkommen til min portfolio
                    </Typography>
                </Container>
            </header>
            
            <main>
                <Container style={{padding: "2rem"}}>
                    <Row className="text-center">
                        <Col>
                            {/* <Typography variant="h2" gutterBottom>
                                Byg flotte brugergrænseflader med React
                            </Typography>
                            <Typography variant="body1" style={{ marginBottom: "1.5rem" }}>
                                Vi kombinerer kraften i Material-UI og Bootstrap for at skabe smukke og funktionelle designs.
                            </Typography>
                            <Button variant="primary" size="lg">
                                Kom i gang
                            </Button> */}
                        </Col>
                    </Row>
                </Container>
            </main>

            <section style={{ padding: "2rem 0" }}>
                <Container>
                    <Row>
                        {/* {[1, 2, 3].map((item) => (
                            <Col md={4} key={item} className="mb-4">
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Funktion {item}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Her er en kort beskrivelse af denne funktion. Den er nem at bruge og meget effektiv.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outline-primary">Læs mere</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                        ))} */}
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer className="footer">
                <Container>
                    <Typography variant="body2" style={{ color: "white", textAlign: "center" }}>
                        © 2024 Min React App. Alle rettigheder forbeholdt.
                    </Typography>
                </Container>
            </footer>
        </div>
    );
};

export default HomePage;

