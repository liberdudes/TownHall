import React from "react";
import Filters from "../Filters/Filters";
import NewFeedback from "../NewFeedback/NewFeedback";
import "./TopBar.css";

class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewFeedbackSubmit = this.handleNewFeedbackSubmit.bind(this);
    this.handleDateFilterChange = this.handleDateFilterChange.bind(this);
    this.handleVotesFilterChange = this.handleVotesFilterChange.bind(this);
    this.handleProjectFilterChange = this.handleProjectFilterChange.bind(this);
    this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
  }

  handleNewFeedbackSubmit() {
    this.props.onNewFeedbackSubmit();
  }

  handleDateFilterChange(value) {
    this.props.onDateFilterChange(value);
  }

  handleVotesFilterChange(value) {
    this.props.onVotesFilterChange(value);
  }

  handleProjectFilterChange(value) {
    this.props.onProjectFilterChange(value);
  }

  handleStatusFilterChange(value) {
    this.props.onStatusFilterChange(value);
  }

  render() {
    // subject
    // body
    // project
    let newFeedback;
    if (this.props.container === "Feedback") {
      newFeedback = (
        <NewFeedback
          projects={this.props.projects}
          onNewFeedbackSubmit={this.handleNewFeedbackSubmit}
        />
      );
    } else {
      newFeedback = null;
    }

    return (
      <div className="topBarContainer">
        {newFeedback}
        <div className="topBarFiltersContainer">
          <Filters
            dateFilter={this.props.dateFilter}
            onDateFilterChange={this.handleDateFilterChange}
            votesFilter={this.props.votesFilter}
            onVotesFilterChange={this.handleVotesFilterChange}
            projects={this.props.projects}
            projectFilter={this.props.projectFilter}
            onProjectFilterChange={this.handleProjectFilterChange}
            statusFilter={this.props.statusFilter}
            onStatusFilterChange={this.handleStatusFilterChange}
          />
        </div>
      </div>
    );
  }
}

export default TopBar;
