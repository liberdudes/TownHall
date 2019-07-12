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
    
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleDevModeChange = this.handleDevModeChange.bind(this);
    this.state = {
     isDevMode: false,
     search: '',
      feedbackCollection: []
    }
  }

  async componentDidMount() {
    let messages = await helper.getMessages();
    console.log(messages.length);

    await new Promise(resolve => { setTimeout(resolve, 2000); });

    this.setState({feedbackCollection: messages})
    console.log(this.state.feedbackCollection)
  }
  
  handleSearchChange(value) {
    this.setState({search: value});
  }
    
  handleDevModeChange(value) {
    this.setState({isDevMode: value});
  }

  filterFeedbackBySearch(search) {
    search = search.toLowerCase();
    return this.state.feedbackCollection.filter(
      (feedback) => {
        let subject = feedback.subject.toLowerCase();
        return subject.indexOf(search) !== -1;
      }
    );
  }

  render() {
    let uniqueProjects = [];
    // this.state.feedbackCollection.map((feedbackCollection) => {
    //   if (!uniqueProjects.includes(feedbackCollection.project)) {
    //     uniqueProjects.push(feedbackCollection.project);
    //   }
    // });

    let filteredFeedback = this.filterFeedbackBySearch(this.state.search);
    console.log(filteredFeedback)

    return (
      <div className="App">
        <Navigation 
          devMode={this.state.isDevMode} 
          search={this.state.search}
          onDevModeChange={this.handleDevModeChange}
          onSearchChange={this.handleSearchChange}
        />
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
                      <div>wow</div>
                    ) : (
                      <Modal />
                    )}
                  </Col>
                </Row>
              </Container>
              <ul>
                { (filteredFeedback.length != null)? filteredFeedback.map((userFeedback) => {
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
