import React from 'react';

import Filter from './components/Filter';
import Navigation from './components/Navigation';
import UserFeedbackCard from './components/UserFeedbackCard';
import Modal from './components/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as helper from './components/helper';
import moment from 'moment';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleDevModeChange = this.handleDevModeChange.bind(this);
    this.handleDateFilterChange = this.handleDateFilterChange.bind(this);
    this.handleVotesFilterChange = this.handleVotesFilterChange.bind(this);
    this.handleProjectFilterChange = this.handleProjectFilterChange.bind(this);

    this.state = {
      isDevMode: false,
      search: '',
      dateFilter: 'All',
      votesFilter: 'Highest',
      projectFilter: 'All',
      feedbackCollection: []
    }
  }

  async componentDidMount() {
    let messages = await helper.getMessages();

    await new Promise(resolve => { setTimeout(resolve, 500); });

    this.setState({feedbackCollection: messages});
  }
  
  handleSearchChange(value) {
    this.setState({search: value});
  }
    
  handleDevModeChange(value) {
    this.setState({isDevMode: value});
  }

  handleDateFilterChange(value) {
    if (value == null) {
      this.setState({dateFilter: this.state.dateFilter});
    } else {
      this.setState({dateFilter: value});
    }
  }

  handleVotesFilterChange(value) {
    if (value == null) {
      this.setState({votesFilter: this.state.votesFilter});
    } else {
      this.setState({votesFilter: value});
    }
  }

  handleProjectFilterChange(value) {
    if (value == null) {
      this.setState({projectFilter: this.state.projectFilter});
    } else {
      this.setState({projectFilter: value});
    }
  }

  filterFeedbackBySearch(collection, search) {
    search = search.toLowerCase();
    return collection.filter(
      (feedback) => {
        let subject = feedback.subject.toLowerCase();
        return subject.indexOf(search) !== -1;
      }
    );
  }

  filterFeedbackByDate(collection, date) {
    if (date === "All") {
      return collection;
    } else if (date === "Today") {
        return collection.filter(
          (feedback) => {
            const feedbackDay = moment(feedback.timestamp);
            const today = moment();
            return feedbackDay.isSame(today, 'day');
          }
        )
    } else if (date === "This Week") {
        return collection.filter(
          (feedback) => {
            const feedbackDay = moment(feedback.timestamp);
            const today = moment();
            return feedbackDay.isSame(today, 'week');
          }
        )
    } else if (date === "This Month") {
        return collection.filter(
          (feedback) => {
            const feedbackDay = moment(feedback.timestamp);
            const today = moment();
            return feedbackDay.isSame(today, 'month');
          }
        )
    }
  }

  filterFeedbackByVotes(collection, votes) {
    if (votes === "Highest") {
      return collection.sort((a, b) => b.upvote - a.upvote);
    } else if (votes === "Lowest") {
      return collection.sort((a, b) => a.upvote - b.upvote);
    }
  }

  filterFeebackByProject(collection, project) {
    if (project === "All") {
      return collection;
    } else {
      return collection.filter(
        (feedback) => {
          return feedback.project === project;
        }
      )
    }
  }

  render() {
    let uniqueProjects = [];
    this.state.feedbackCollection.map((feedbackCollection) => {
      if (!uniqueProjects.includes(feedbackCollection.project)) {
        uniqueProjects.push(feedbackCollection.project);
      }
    });

    let filteredFeedback;
    filteredFeedback = this.filterFeedbackByDate(this.state.feedbackCollection, this.state.dateFilter);
    filteredFeedback = this.filterFeedbackByVotes(filteredFeedback, this.state.votesFilter);
    filteredFeedback = this.filterFeebackByProject(filteredFeedback, this.state.projectFilter);
    filteredFeedback = this.filterFeedbackBySearch(filteredFeedback, this.state.search);

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
              <Filter
                dateFilter={this.state.dateFilter}
                onDateFilterChange={this.handleDateFilterChange}
                votesFilter={this.state.votesFilter}
                onVotesFilterChange={this.handleVotesFilterChange} 
                projects={uniqueProjects}
                projectFilter={this.state.projectFilter}
                onProjectFilterChange={this.handleProjectFilterChange}
              />
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
