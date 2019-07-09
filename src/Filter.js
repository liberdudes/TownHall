import './Filter.css'

import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Filter extends React.Component {
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
                Last Week
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Another action
                </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Something else
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
                Another action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Something else
              </Dropdown.Item>
            </DropdownButton>
          <h4 class="filter_headers_text">
            Project
          </h4>
          <DropdownButton variant="light" id="dropdown-basic-button" title="All">
            <Dropdown.Item href="#/action-1">
              All
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Another action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Something else
            </Dropdown.Item>
          </DropdownButton>
          </div>
        )
      }
  }
  export default Filter;
