import React from 'react';
import './styles/App.css';

import Filter from './components/Filter';
import Report from './components/Report';
import Navigation from './components/Navigation';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Navigation/>
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
    </div>
  );
}

export default App;
