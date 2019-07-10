import '../styles/UserFeedbackCard.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Report extends React.Component {
    render() {
        return (
            <div class="user-feedback-card">
                <Container>
                    <Row>
                        <Col xs={9} id="col1-card">
                            <p id="user-feedback-card-subject">
                                This is a subject line for feedback from a user
                            </p>
                            <p id="user-feedback-card-tag">
                                #CIAT
                            </p>
                        </Col>
                        <Col xs={3} id="col2-card">
                            <button id="in-progress-badge">
                                In Progress
                            </button>
                        </Col>
                    </Row>
                </Container>
                <hr id="user-feedback-card-hr"/>
                <Container>
                    <Row>
                        <Col xs={8} id="col1-sub">
                            <p id="user-feedback-card-description">
                                Description of user’s bug, as well as a walkthrough of steps to reproduce the issue. This text extends and is a paragraph.
                            </p>
                        </Col>
                        <Col xs={4} id="col2-sub">
                            <h5 id="user-votes">
                                USER VOTES
                            </h5>
                            <p id="upvote-count">
                                21
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col xs={8}>
                            <a id="attachment-link" href="attachment-url">
                                View attachments
                            </a>
                        </Col>
                        <Col xs={4}>
                            <p id="user-feedback-card-date">
                                July 9, 2019
                            </p>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        )
      }
  }
  export default Report;
