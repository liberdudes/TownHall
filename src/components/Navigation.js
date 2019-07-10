import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Toggle from 'react-toggle'
import Modal from './Modal'
import logo from '../icon.png'
import "react-toggle/style.css"
import '../styles/Navigation.css';

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
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    <h2 id = "span_text">Town Hall</h2>
                    </Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="justify-content-end" />
                        <Button class="search" type="submit">Search</Button>
                    </Form>      
                    
                    <Modal />      
                    <Navbar.Collapse className="justify-content-end">                    
                        <label>
                            <span>User</span>
                            <Toggle
                                defaultChecked={this.state.toggleActive}
                                icons={false}
                                onChange={this.toggle} />
                        </label>
                        <span>Dev</span>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;