import React from "react";
import {
  Navbar,
  Container,
} from "react-bootstrap";
import "./style.css";

function NameNav() {
  return (
    <Navbar className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
      <Container className="container">
        <Navbar.Brand className="navbar-brand heading mr-auto">
          <h1 id="danFont">Dan Weikart</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NameNav;
