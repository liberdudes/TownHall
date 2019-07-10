import React from 'react';

import Filter from './components/Filter';
import Report from './components/Report';
import Navigation from './components/Navigation';
import UserFeedbackCard from './components/UserFeedbackCard';
import Modal from './components/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as helper from './components/helper';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleDevModeChange = this.handleDevModeChange.bind(this);
    this.state = {
     isDevMode: false,
      feedback: []
    }
  }

  async componentDidMount() {
    let messages = await helper.getMessages();
    console.log(messages.length);

    await new Promise(resolve => { setTimeout(resolve, 2000); });

    this.setState({feedback: messages})
    console.log(this.state.feedback)
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
                { (this.state.feedback.length != null)? this.state.feedback.map((userFeedback) => {
                  return <UserFeedbackCard feedback={userFeedback}/>
                }): null}

              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
