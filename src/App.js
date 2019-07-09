import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container id="container">
      <Row>
        <Col xs={3} id="col1">
          <h2 id="filter_text">
            Filter
          </h2>
          <h4 class="filter_headers_text">
            Date
          </h4>
          <DropdownButton variant="light" id="dropdown-basic-button" title="Last">
            <Dropdown.Item href="#/action-1">Last Week</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <h4 class="filter_headers_text">
            Votes
          </h4>
          <DropdownButton variant="light" id="dropdown-basic-button" title="Highest">
            <Dropdown.Item href="#/action-1">Highest</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <h4 class="filter_headers_text">
            Project
          </h4>
          <DropdownButton variant="light" id="dropdown-basic-button" title="All">
            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <h2 id="report_text">
            Report
          </h2>
          <h4 class="filter_headers_text">
            Project
          </h4>
          <DropdownButton variant="light" id="dropdown-basic-button" title="All">
            <Dropdown.Item href="#/action-1">All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <Button id="button">GENERATE REPORT</Button>
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
