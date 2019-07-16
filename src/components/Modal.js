import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ModalBoot from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import * as helper from "../helper";
import "../styles/NewFeedbackButton.css";

class Modal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      formBody: "",
      formSubject: "",
      formDropdown: "",
      dropdownOptions: [],
      projectId: ""
    };
  }

  componentDidMount() {
    this.setState({ dropdownOptions: helper.getProjects() });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    helper.addMessageToProject(this.state.projectId, {
      subject: this.state.formSubject,
      body: this.state.formBody
    });
    this.handleClose();
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleChangeDropdown = event => {
    this.setState({
      projectId: event.target.text
    });
  };

  handleChangeSelect = event => {
    this.setState({
      projectId: event.target.text
    });
  };

  render() {
    let optionItems = this.state.dropdownOptions.map(option => (
      <Dropdown.Item key={option} value={option}>
        {option}
      </Dropdown.Item>
    ));

    return (
      <>
        <Button id="button-new" onClick={this.handleShow}>
          NEW FEEDBACK
        </Button>

        <ModalBoot show={this.state.show} onHide={this.handleClose}>
          <ModalBoot.Header closeButton>
            <ModalBoot.Title>New Feedback</ModalBoot.Title>
          </ModalBoot.Header>
          <ModalBoot.Body>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  value={this.state.formSubject}
                  type="text"
                  placeholder="Subject"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBody">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  value={this.state.formBody}
                  rows="3"
                  placeholder="Comment"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formDropdown">
                <Form.Label>Select Project</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    value={this.state.formDropdown}
                    placeholder="Drop Down"
                    id="dropdown-basic"
                    onChange={this.handleChangeSelect}
                  ></Dropdown.Toggle>

                  <Dropdown.Menu onClick={this.handleChangeDropdown}>
                    {optionItems}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </ModalBoot.Body>
        </ModalBoot>
      </>
    );
  }
}

export default Modal;
