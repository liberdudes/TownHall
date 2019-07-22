import React from "react";
import moment from "moment";
import * as helper from "../../api/helper";
import SearchBar from "../SearchBar/SearchBar";
import SideBar from "../SideBar/SideBar";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import TopBar from "../TopBar/TopBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewFeedbackSubmit = this.handleNewFeedbackSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleDateFilterChange = this.handleDateFilterChange.bind(this);
    this.handleVotesFilterChange = this.handleVotesFilterChange.bind(this);
    this.handleProjectFilterChange = this.handleProjectFilterChange.bind(this);
    this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
    this.handleContainerChange = this.handleContainerChange.bind(this);

    this.state = {
      isSubmittingNewFeedback: false,
      searchInput: "",
      dateFilter: "All",
      votesFilter: "All",
      projectFilter: "All",
      statusFilter: "All",
      container: "Feedback",
      feedbackCollection: []
    };
  }

  async componentDidMount() {
    let messages = await helper.getMessages();

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    this.setState({ feedbackCollection: messages });
  }

  async handleNewFeedbackSubmit(values) {
    // let messages = await helper.getMessages();

    this.setState({ isSubmittingNewFeedback: true });

    console.log(values);

    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });

    console.log("RELOADED NEW DATA");

    this.setState({ isSubmittingNewFeedback: false, feedbackCollection: [] });
    // this.setState({ feedbackCollection: messages });
  }

  handleSearchChange(value) {
    this.setState({ searchInput: value });
  }

  handleDateFilterChange(value) {
    this.setState({ dateFilter: value });
  }

  handleVotesFilterChange(value) {
    this.setState({ votesFilter: value });
  }

  handleProjectFilterChange(value) {
    this.setState({ projectFilter: value });
  }

  handleStatusFilterChange(value) {
    this.setState({ statusFilter: value });
  }

  handleContainerChange(value) {
    if (this.state !== value) {
      this.setState({ container: value });
    }
  }

  setupFilters(collection) {
    let filteredFeedback;
    filteredFeedback = this.filterFeedbackByDate(
      collection,
      this.state.dateFilter
    );
    filteredFeedback = this.filterFeedbackByVotes(
      filteredFeedback,
      this.state.votesFilter
    );
    filteredFeedback = this.filterFeebackByProject(
      filteredFeedback,
      this.state.projectFilter
    );
    filteredFeedback = this.filterFeedbackByStatus(
      filteredFeedback,
      this.state.statusFilter
    );
    filteredFeedback = this.filterFeedbackBySearch(
      filteredFeedback,
      this.state.searchInput
    );
    return filteredFeedback;
  }

  filterFeedbackByDate(collection, date) {
    if (date === "All") {
      return collection;
    } else if (date === "Today") {
      return collection.filter(feedback => {
        const feedbackDay = moment(feedback.timestamp);
        const today = moment();
        return feedbackDay.isSame(today, "day");
      });
    } else if (date === "This Week") {
      return collection.filter(feedback => {
        const feedbackDay = moment(feedback.timestamp);
        const today = moment();
        return feedbackDay.isSame(today, "week");
      });
    } else if (date === "This Month") {
      return collection.filter(feedback => {
        const feedbackDay = moment(feedback.timestamp);
        const today = moment();
        return feedbackDay.isSame(today, "month");
      });
    }
  }

  filterFeedbackByVotes(collection, votes) {
    if (votes === "All") {
      return collection;
    } else if (votes === "Highest") {
      return collection.sort((a, b) => b.upvote - a.upvote);
    } else if (votes === "Lowest") {
      return collection.sort((a, b) => a.upvote - b.upvote);
    }
  }

  filterFeebackByProject(collection, project) {
    if (project === "All") {
      return collection;
    } else {
      return collection.filter(feedback => {
        return feedback.project === project;
      });
    }
  }

  filterFeedbackByStatus(collection, status) {
    if (status === "All") {
      return collection;
    } else if (status === "New") {
      return collection.filter(feedback => {
        return feedback.status === status;
      });
    } else if (status === "In Progress") {
      return collection.filter(feedback => {
        return feedback.status === status;
      });
    } else if (status === "Completed") {
      return collection.filter(feedback => {
        return feedback.status === status;
      });
    } else if (status === "Closed") {
      return collection.filter(feedback => {
        return feedback.status === status;
      });
    }
  }

  filterFeedbackBySearch(collection, search) {
    search = search.toLowerCase();
    return collection.filter(feedback => {
      let subject = feedback.subject.toLowerCase();
      return subject.indexOf(search) !== -1;
    });
  }

  getUniqueProjects() {
    let uniqueProjects = [];
    this.state.feedbackCollection.forEach(feedbackCollection => {
      if (
        !uniqueProjects.includes(feedbackCollection.project) &&
        feedbackCollection.project !== ""
      ) {
        uniqueProjects.push(feedbackCollection.project);
      }
    });
    return uniqueProjects;
  }

  render() {
    let uniqueProjects = this.getUniqueProjects();
    let filteredFeedback = this.setupFilters(this.state.feedbackCollection);

    let container;
    if (this.state.container === "Feedback") {
      container = filteredFeedback.map(feedback => {
        return <FeedbackCard key={feedback.messageId} feedback={feedback} />;
      });
    } else if (this.state.container === "Admin Mode") {
      container = <p>admin</p>;
    } else if (this.state.container === "Statistics") {
      container = <p>statistics</p>;
    } else if (this.state.container === "Settings") {
      container = <p>settings</p>;
    }

    let loading;
    if (this.state.isSubmittingNewFeedback === true) {
      loading = <p>LOADING</p>;
    } else {
      loading = null;
    }

    let topBar;
    if (
      this.state.container === "Feedback" ||
      this.state.container === "Admin Mode"
    ) {
      topBar = (
        <TopBar
          container={this.state.container}
          onNewFeedbackSubmit={this.handleNewFeedbackSubmit}
          dateFilter={this.state.dateFilter}
          onDateFilterChange={event => this.handleDateFilterChange(event)}
          votesFilter={this.state.votesFilter}
          onVotesFilterChange={this.handleVotesFilterChange}
          projects={uniqueProjects}
          projectFilter={this.state.projectFilter}
          onProjectFilterChange={this.handleProjectFilterChange}
          statusFilter={this.state.statusFilter}
          onStatusFilterChange={this.handleStatusFilterChange}
        />
      );
    } else {
      topBar = null;
    }

    return (
      <div className="grid">
        <div className="sidebar">
          <SideBar
            container={this.state.container}
            onContainerChange={this.handleContainerChange}
          />
        </div>
        <div className="header">
          <SearchBar onSearchChange={this.handleSearchChange} />
        </div>
        <div className="main">
          {loading}
          {topBar}
          {container}
        </div>
      </div>
    );
  }
}

export default App;
