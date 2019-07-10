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
    
    this.handleDevModeChange = this.handleDevModeChange.bind(this);
    this.state = {
      isDevMode: false,
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
        },
        {
          subject: "subject 4",
          project: "#CBA",
          status: "Backlog",
          description: "desc 4",
          votes: 15,
          date: "July 3, 2019"
        }
      ]
    };
  }
  
handleDevModeChange(value) {
  this.setState({isDevMode: value});
}

  render() {
    let uniqueProjects = [];
    this.state.feedback.map((feedback) => {
      if (!uniqueProjects.includes(feedback.project)) {
        uniqueProjects.push(feedback.project);
      }
    });

    return (
      <div className="App">
        <Navigation devMode={this.state.isDevMode} onDevModeChange={this.handleDevModeChange}/>
        <Container id="container">
          <Row>
            <Col xs={3} id="col1">
              <Filter projects={uniqueProjects}/>
              <Report/>
            </Col>
            <Col xs={9} id="col2">
              <Container>
                <Row>
                  <Col xs={7}>
                  </Col>
                  <Col xs={5}>
                    {this.state.isDevMode ? (
                      <div></div>
                    ) : (
                      <Modal />
                    )}  
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
