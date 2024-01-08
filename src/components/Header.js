import React, { Component } from "react";
import { Container, Form, Navbar, FormControl, Button, Nav } from "react-bootstrap";
import logo from "./logo.png";
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import Home from "../pages/Home.js";
import Resume from "../pages/Resume.js";
import Contact from "../pages/Contact.js";



export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            React Bootstrap
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/resume">Resume</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form> bg="light" expand="lg"
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/resume" element={<Resume/>} />
                        <Route exact path="/contact" element={<Contact/>} />
                    </Routes>
                </Router>
            </>
        );
    }
}
