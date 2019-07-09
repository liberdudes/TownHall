import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalBoot from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import * as helper from './helper';

class Modal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        formBody: "",
        formSubject: "",
        dropdownOptions: []
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
        helper.addMessageToProject('Customer Portal', {
            subject: this.state.formSubject,
            body: this.state.formBody
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
  
    render() {
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
                    <Form.Control value={this.state.formBody} type="text" placeholder="Body" onChange={this.handleChange}/>
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
