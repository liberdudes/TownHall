import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Toggle from 'react-toggle'
import logo from '../icon.png'
import "react-toggle/style.css"
import '../styles/Navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleDevModeChange = this.handleDevModeChange.bind(this);
    }

    handleSearchChange(e) {
        this.props.onSearchChange(e.target.value.substr(0, 20));
    }

    handleDevModeChange(e) {
        this.props.onDevModeChange(!this.props.devMode);
    }    

    render() {
        let toggleLabel;
        if (this.props.devMode) {
            toggleLabel = <span id="toggle-label">Dev</span>;
        } else {
            toggleLabel = <span id="toggle-label">User</span>;
        }
        return (
            <Navbar id="navbar" bg="white">
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                <span class="townhall_style" id="town_style">Town</span>
                <span class="townhall_style" id="hall_style">Hall</span>
                </Navbar.Brand>
                <Form inline>
                    <FormControl id="search" type="text" placeholder="Search Feedback" className="mr-sm-2" onChange={this.handleSearchChange} />
                </Form>
                <Navbar.Collapse className="justify-content-end">
                    {toggleLabel}
                    <Toggle
                        defaultChecked={this.props.devMode}
                        className="dev-toggle"
                        icons={false}
                        onChange={this.handleDevModeChange} 
                    />
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;