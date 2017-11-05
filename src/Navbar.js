import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const navbarInstance = (
  <Navbar id="nav-bar">
    <Navbar.Header>
      <Navbar.Brand>
      <a>The Internet of Things</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavDropdown eventKey={3} title="Subscriptions" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>The Actual Tanks</MenuItem>
        <MenuItem eventKey={3.2}>Mysterious Weather Station</MenuItem>
        <MenuItem eventKey={3.3}>Enrique's Garage</MenuItem>
        <MenuItem eventKey={3.4}>"Turn The Lights Off" Dad</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

ReactDOM.render(navbarInstance, document.getElementById('navbar'));
