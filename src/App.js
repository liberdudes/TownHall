import React from 'react';
import Filter from './components/Filter';
import Report from './components/Report';
import Navigation from './components/Navigation';
import UserFeedbackCard from './components/UserFeedbackCard';
import NewFeedbackButton from './components/NewFeedbackButton';
import Modal from './components/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

      feedback: [
        {
          subject: "subject 1",
          project: "#CIAT",
          status: "In Progress",
          description: "desc 1",
          votes: 21,
          date: "July 9, 2019"
        },
        {
          subject: "subject 2",
          project: "#ABC",
          status: "Done",
          description: "desc 2",
          votes: 15,
          date: "July 3, 2019"
        },
        {
          subject: "subject 3",
          project: "#CBA",
          status: "Backlog",
          description: "desc 3",
          votes: 15,
          date: "July 3, 2019"
        }
      ]
    };
  }

  // let elements = [0, 0, 0];
  render() {
    let elements = [0, 0, 0];
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
              <Container>
                <Row>
                  <Col xs={7}>
                  </Col>
                  <Col xs={5}>
                    <Modal />
                  </Col>
                </Row>
              </Container>
              <ul>
                {this.state.feedback.map((userFeedback) => {
                  return <UserFeedbackCard feedback={userFeedback}/>
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
