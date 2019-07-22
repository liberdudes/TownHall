import React from "react";
import "./Filters.css";

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateFilterChange = this.handleDateFilterChange.bind(this);
    this.handleVotesFilterChange = this.handleVotesFilterChange.bind(this);
    this.handleProjectFilterChange = this.handleProjectFilterChange.bind(this);
    this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
  }

  handleDateFilterChange(e) {
    this.props.onDateFilterChange(e.target.value);
  }

  handleVotesFilterChange(e) {
    this.props.onVotesFilterChange(e.target.value);
  }

  handleProjectFilterChange(e) {
    this.props.onProjectFilterChange(e.target.value);
  }

  handleStatusFilterChange(e) {
    this.props.onStatusFilterChange(e.target.value);
  }

  render() {
    return (
      <div className="filtersContainer">
        <div className="filtersDateContainer">
          <select
            value={this.props.dateFilter}
            onChange={event => this.handleDateFilterChange(event)}
          >
            <option value="All">All Dates</option>
            <option value="Today">Today</option>
            <option value="This Week">Week</option>
            <option value="This Month">Month</option>
          </select>
        </div>
        <div className="filtersVotesContainer">
          <select
            value={this.props.votesFilter}
            onChange={this.handleVotesFilterChange}
          >
            <option value="All">All Votes</option>
            <option value="Highest">Highest</option>
            <option value="Lowest">Lowest</option>
          </select>
        </div>
        <div className="filtersProjectContainer">
          <select
            value={this.props.projectFilter}
            onChange={this.handleProjectFilterChange}
          >
            <option value="All">All Projects</option>
            {this.props.projects.map(project => {
              return (
                <option value={project} key={project}>
                  {project}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filtersStatusContainer">
          <select
            value={this.props.statusFilter}
            onChange={this.handleStatusFilterChange}
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
