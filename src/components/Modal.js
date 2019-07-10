import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalBoot from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'

class Modal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        formBody: "",
        formSubject: "",
        dropdownOptions: ["option 1", "option 2"],
        projectId: ""
      };
    }

    // TODO
    componentDidMount() {

    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    // TODO
    handleSubmit() {
        console.log(this.state)
        this.handleClose()
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleChangeDropdown = (event) => {
        this.setState({
          projectId: event.target.text
        });
    }
  
    render() {

        let optionItems = this.state.dropdownOptions.map((option) =>
            <Dropdown.Item key={option} value={option}>{option}</Dropdown.Item>
        );

        return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            New Feedback
          </Button>
  
          <ModalBoot show={this.state.show} onHide={this.handleClose}>
            <ModalBoot.Header closeButton>
              <ModalBoot.Title>New Feedback</ModalBoot.Title>
            </ModalBoot.Header>
            <ModalBoot.Body>
            <Form onSubmit={e => this.handleSubmit(e)}>

                <Form.Group controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control value={this.state.formSubject} type="text" placeholder="Subject" onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBody">
                    <Form.Label>Body</Form.Label>
                    <Form.Control value={this.state.formBody} type="textarea" placeholder="Body" onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group controlId="formDropdown">
                    <Form.Label>Dropdown</Form.Label>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu onClick={this.handleChangeDropdown}>
                        {optionItems}
                    </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>

                <Button variant="primary" type="submit" >
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
