import "../styles/Filter.css";

import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateFilterChange = this.handleDateFilterChange.bind(this);
    this.handleVotesFilterChange = this.handleVotesFilterChange.bind(this);
    this.handleProjectFilterChange = this.handleProjectFilterChange.bind(this);
    this.handleStatusFilterChange = this.handleStatusFilterChange.bind(this);
  }

  handleDateFilterChange(e) {
    this.props.onDateFilterChange(e.target.text);
  }

  handleVotesFilterChange(e) {
    this.props.onVotesFilterChange(e.target.text);
  }

  handleProjectFilterChange(e) {
    this.props.onProjectFilterChange(e.target.text);
  }

  handleStatusFilterChange(e) {
    this.props.onStatusFilterChange(e.target.text);
  }

  render() {
    return (
      <div>
        <h2 id="filter_text">Filter</h2>
        <h4 className="filter_headers_text">Date</h4>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title={this.props.dateFilter}
          onClick={this.handleDateFilterChange}
        >
          <Dropdown.Item key="All" value="All">
            All
          </Dropdown.Item>
          <Dropdown.Item key="Today" value="Today">
            Today
          </Dropdown.Item>
          <Dropdown.Item key="This Week" value="This Week">
            This Week
          </Dropdown.Item>
          <Dropdown.Item key="This Month" value="This Month">
            This Month
          </Dropdown.Item>
        </DropdownButton>
        <h4 className="filter_headers_text">Votes</h4>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title={this.props.votesFilter}
          onClick={this.handleVotesFilterChange}
        >
          <Dropdown.Item key="Highest" value="Highest">
            Highest
          </Dropdown.Item>
          <Dropdown.Item key="Lowest" value="Lowest">
            Lowest
          </Dropdown.Item>
        </DropdownButton>
        <h4 className="filter_headers_text">Project</h4>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title={this.props.projectFilter}
          onClick={this.handleProjectFilterChange}
        >
          <Dropdown.Item>All</Dropdown.Item>
          {this.props.projects.map(project => {
            return (
              <Dropdown.Item key={project} value={project}>
                {project}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <h4 className="filter_headers_text">Status</h4>
        <DropdownButton
          variant="light"
          id="dropdown-basic-button"
          title={this.props.statusFilter}
          onClick={this.handleStatusFilterChange}
        >
          <Dropdown.Item key="All" value="All">
            All
          </Dropdown.Item>
          <Dropdown.Item key="New" value="New">
            New
          </Dropdown.Item>
          <Dropdown.Item key="In Progress" value="In Progress">
            In Progress
          </Dropdown.Item>
          <Dropdown.Item key="Completed" value="Completed">
            Completed
          </Dropdown.Item>
          <Dropdown.Item key="Closed" value="Closed">
            Closed
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default Filter;
