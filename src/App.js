import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Container fluid>

        <Row className="header" sm={12}>
          <Col className="title">
            <h1>rajat kumar</h1>
          </Col>

          <Nav as={Col} variant="pills" className="justify-content-center" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Experience</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>

        <Row className="body" sm={12}>
        
        </Row>

      </Container>
    )
  }
}

export default App;
