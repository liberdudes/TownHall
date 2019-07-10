import '../styles/UserFeedbackCard.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Report extends React.Component {
    render() {
        const status = this.props.feedback.status;
        let output;
        if (status === "Backlog") {
            output = <button id="backlog-badge">
                        Backlog
                    </button>
        }
        if (status === "In Progress") {
            output = <button id="in-progress-badge">
                        In Progress
                    </button>
        } 
        if (status === "Done") {
            output = <button id="done-badge">
                        Done
                    </button>
        }
        return (
            <div class="user-feedback-card">
                <Container>
                    <Row>
                        <Col xs={9} id="col1-card">
                            <p id="user-feedback-card-subject">
                                {this.props.feedback.subject}
                            </p>
                            <p id="user-feedback-card-tag">
                                {this.props.feedback.project}
                            </p>
                        </Col>
                        <Col xs={3} id="col2-card">
                            {output}
                        </Col>
                    </Row>
                </Container>
                <hr id="user-feedback-card-hr"/>
                <Container>
                    <Row>
                        <Col xs={8} id="col1-sub">
                            <p id="user-feedback-card-description">
                                {this.props.feedback.description}
                            </p>
                        </Col>
                        <Col xs={4} id="col2-sub">
                            <h5 id="user-votes">
                                USER VOTES
                            </h5>
                            <p id="upvote-count">
                                {this.props.feedback.votes}
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
                                {this.props.feedback.date}
                            </p>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        )
      }
  }
  export default Report;
