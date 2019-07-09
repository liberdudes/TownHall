import React from 'react';
import './App.css';

import Filter from './Filter';
import Report from './Report';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container id="container">
      <Row>
        <Col xs={3} id="col1">
          <Filter/>
          <Report/>
        </Col>
        <Col xs={9} id="col2">
          <div class="user-feedback-card">
            card
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
