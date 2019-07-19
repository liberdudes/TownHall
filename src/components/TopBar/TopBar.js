import React from "react";
import Filters from "../Filters/Filters";
import "./TopBar.css";

class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateFilterChange = this.handleDateFilterChange.bind(this);
    this.handleVotesFilterChange = this.handleVotesFilterChange.bind(this);
    this.handleProjectFilterChange = this.handleProjectFilterChange.bind(this);
    this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
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
    let newFeedbackButton;
    if (this.props.container === "Feedback") {
      newFeedbackButton = <button>new feedback</button>;
    } else {
      newFeedbackButton = null;
    }

    return (
      <div className="topBarContainer">
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
        <div className="topBarButtonContainer">{newFeedbackButton}</div>
      </div>
    );
  }
}

export default TopBar;
