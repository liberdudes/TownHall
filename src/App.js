import React from 'react';

import Filter from './components/Filter';
import Report from './components/Report';
import Navigation from './components/Navigation';
import UserFeedbackCard from './components/UserFeedbackCard';
import NewFeedbackButton from './components/NewFeedbackButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as helper from './components/helper';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
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
                    <NewFeedbackButton/>
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
