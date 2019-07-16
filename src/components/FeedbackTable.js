import React, { Component } from "react";

import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import moment from "moment";

class FeedbackTable extends Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  handleStatusChange(messageId, e) {
    this.props.onStatusChange(messageId, e.target.text);
  }

  render() {
    return (
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>Upvotes</th>
            <th>Subject</th>
            <th>Project</th>
            <th>Date Posted</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.feedbackCollection.map(feedback => {
            return (
              <tr key={feedback.messageId}>
                <td>{feedback.upvote}</td>
                <td>{feedback.subject}</td>
                <td>{feedback.project}</td>
                <td>
                  {moment(feedback.timestamp).format("MMMM Do YYYY, h:mm a")}
                </td>
                <td>
                  <DropdownButton
                    variant="light"
                    id="dropdown-basic-button"
                    title={feedback.status}
                    onClick={event =>
                      this.handleStatusChange(feedback.messageId, event)
                    }
                  >
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default FeedbackTable;
