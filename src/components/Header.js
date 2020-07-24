import React from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const hamburgerBtnStyle = {
//   fontFamily: "FontAwesome",
//   content: "\f805",
// };

function Header() {
  return (

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        id="menu"
        className="navbar navbar-default fixed-top ml-auto navbar-expand-lg navbar-light bg-light"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="reponsive-navbar-nav"
            className="ml-auto"
          >
            <FontAwesomeIcon icon="hamburger" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ml-auto">
              <Nav.Link
                className="nav-item ml-auto nav-link active"
                href="index.html#about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className="nav-item ml-auto nav-link"
                href="index.html#portfolio"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                className="nav-item ml-auto nav-link"
                href="index.html#contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

export default Header;