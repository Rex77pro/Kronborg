import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Typography, Card, CardContent, CardActions } from "@mui/material";

const HomePage = () => {
    return (
        <div>
            <header style={{ backgroundColor: "#007bff", padding: "1rem" }}>
                <Container>
                    <Typography variant="h4" style={{ color: "white", textAlign: "center" }}>
                        Velkommen til Min React App
                    </Typography>
                </Container>
            </header>
            <main style={{ backgroundColor: "#f8f9fa", padding: "2rem 0" }}>
                <Container>
                    <Row className="text-center">
                        <Col>
                            <Typography variant="h2" gutterBottom>
                                Byg flotte brugergrænseflader med React
                            </Typography>
                            <Typography variant="body1" style={{ marginBottom: "1.5rem" }}>
                                Vi kombinerer kraften i Material-UI og Bootstrap for at skabe smukke og funktionelle designs.
                            </Typography>
                            <Button variant="primary" size="lg">
                                Kom i gang
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </main>
            <section style={{ padding: "2rem 0" }}>
                <Container>
                    <Row>
                        {[1, 2, 3].map((item) => (
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
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: "#007bff", padding: "1rem", marginTop: "auto" }}>
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

