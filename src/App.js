import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="nav">
          <Nav variant="pills" className="justify-content-center" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">experience</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    )
  }
}

export default App;
