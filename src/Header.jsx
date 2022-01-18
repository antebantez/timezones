import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import classes from "/public/Header.module.css";

export default function Header() {
  return (

<Navbar bg="dark" variant="dark" fixed="top" expand="lg">
  <Container>
    <Navbar.Brand className="head-title" padding-left="10px" href="/">Time-Zones</Navbar.Brand>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar">
        <Link className="head-link" to="/">HOME</Link>
        <Link className="head-link" to="/cities">CITIES</Link>
        <Link className="head-link" to="/my-time">MY-TIME</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}
