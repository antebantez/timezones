import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, Col } from './utilities/components-bootstrap';

export default function Header() {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Col>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Col>
        <Col>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link className="head-link" to="/">HOME</Link>
            <Link className="head-link" to="/cities">CITIES </Link>
            <Link className="head-link" to="/my-time">MY-TIME</Link>
          </Nav>
          </Navbar.Collapse>
          </Col>
    </Container>
  </Navbar>
  );
}
