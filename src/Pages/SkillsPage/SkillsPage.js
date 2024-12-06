import React from "react";
import "./SkillsPage.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const SkillPage = () => {
    return (
        <div>
      <Container className="pt-3">
        <h1>Skills</h1>
        <Row>
          <Col>
            <p>Jeg har arbejdet med en række forskellige teknologier indenfor frontend, backend og databaser.</p>
            <p>Her er de teknologier, jeg har brugt gennem min karriere:</p>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5" style={{ textAlign: "center" }}>
        <Row>
          {/* Frontend Section */}
          <Col>
            <Card style={{border: 'none'}}>
                <Card.Body>
                <Card.Title className="fw-bold">Frontend</Card.Title>
                <ul className="list-unstyled">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>TypeScript</li>
                </ul>
                </Card.Body>
            </Card>
            </Col>

          {/* Backend Section */}
            <Col>
                <Card style={{border: 'none'}}>
                <Card.Body>
                    <Card.Title className="fw-bold">Backend</Card.Title>
                    <ul className="list-unstyled">
                    <li>Node.js</li>
                    <li>PHP</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Kotlin</li>
                    <li>.Net</li>
                    </ul>
                </Card.Body>
                </Card>
            </Col>

          {/* API & Databases Section */}
            <Col>
                <Card style={{border: 'none'}}>
                <Card.Body>
                    <Card.Title className="fw-bold">API & Databases</Card.Title>
                    <ul className="list-unstyled">
                    <li>MySQL</li>
                    <li>MsSQL</li>
                    <li>SQL</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                    </ul>
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </div> 
    );
};

export default SkillPage;