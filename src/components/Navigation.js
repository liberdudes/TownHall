import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onDevModeChange(!this.props.devMode);
    }    

    render() {
        return (
            <div className="Navbar">
                <Navbar>
                    <Navbar.Brand href="#home" inline>
                    {/* <img
                        src={logo}
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                        alt="logo"
                    /> */}
                    Logo
                    </Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="justify-content-end" />
                        <Button type="submit">Search</Button>
                    </Form>            
                    <Navbar.Collapse className="justify-content-end">                    
                        <label>
                            <span>Dev</span>
                            <Toggle
                                defaultChecked={this.props.devMode}
                                icons={false}
                                onChange={this.handleChange} />
                        </label>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;