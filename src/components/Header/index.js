import React from "react";
import "./style.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg="light"
      id="menu"
      className="navbar navbar-default fixed-top ml-auto navbar-expand-lg"
    >
      <Container>
        <Navbar.Toggle aria-controls="reponsive-navbar-nav" className="ml-auto">
          <FontAwesomeIcon icon="hamburger" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="container">
            <Navbar.Brand className="navbar-brand heading mr-auto" href="/">
              <h1 id="danFont">Dan Weikart</h1>
            </Navbar.Brand>
          </Container>
          <Nav className="navbar-nav ml-auto">
            <NavLink className="nav-item ml-auto nav-link active" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item ml-auto nav-link" to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="nav-item ml-auto nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
