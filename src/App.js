import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    )
  }
}

export default App;
