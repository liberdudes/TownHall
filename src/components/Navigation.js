import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Toggle from 'react-toggle'
import Modal from './Modal'
import logo from '../icon.png'
import "react-toggle/style.css"

class Navigation extends Component {
    constructor() {
        super();
        this.state = { toggleActive: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ toggleActive: !this.state.toggleActive });
        // alert(this.state.toggleActive)
    }

    render() {
        return (
            <div className="Navbar">
                <Navbar>
                    <Navbar.Brand href="#home" inline>
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    <span>Town Hall</span>
                    </Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="justify-content-end" />
                        <Button type="submit">Search</Button>
                    </Form>      
                    
                    <Modal />      
                    <Navbar.Collapse className="justify-content-end">                    
                        <label>
                            <span>Dev</span>
                            <Toggle
                                defaultChecked={this.state.toggleActive}
                                icons={false}
                                onChange={this.toggle} />
                        </label>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;