import '../styles/Filter.css';

import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleProjectFilterChange = this.handleProjectFilterChange.bind(this);
  }

  handleProjectFilterChange(e) {
    this.props.onProjectFilterChange(e.target.text);
  }

  render() {
    return (
      <div>
        <h2 id="filter_text">
          Filter
        </h2>
        <h4 class="filter_headers_text">
          Date
        </h4>
        <DropdownButton variant="light" id="dropdown-basic-button" title="Last">
          <Dropdown.Item href="#/action-1">
            Today
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Last Week
            </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Last Month
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4">
            All
          </Dropdown.Item>
        </DropdownButton>
        <h4 class="filter_headers_text">
          Votes
        </h4>
        <DropdownButton variant="light" id="dropdown-basic-button" title="Highest">
          <Dropdown.Item href="#/action-1">
            Highest
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            Lowest
          </Dropdown.Item>
        </DropdownButton>
      <h4 class="filter_headers_text">
        Project
      </h4>
      <DropdownButton 
        variant="light" 
        id="dropdown-basic-button" 
        title={this.props.projectFilter}
        onClick={this.handleProjectFilterChange}
      >
        <Dropdown.Item href="#/action-1">
          All
        </Dropdown.Item>
          {
            this.props.projects.map((project) => {
              return <Dropdown.Item key={project} value={project}>{project}</Dropdown.Item>
            })
          }
        </DropdownButton>
      </div>
    )
  }
}

export default Filter;
