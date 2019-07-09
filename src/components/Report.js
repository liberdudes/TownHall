import '../styles/Report.css';

import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

class Report extends React.Component {
    render() {
        return (
          <div>
            <h2 id="report_text">
                Report
            </h2>
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
            <Button id="button">
                GENERATE REPORT
            </Button>
        </div>
        )
      }
  }
  export default Report;
