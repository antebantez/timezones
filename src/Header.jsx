import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav} from 'react-bootstrap';



export default function Header() {
  return (
<Navbar bg="light" color='white' fixed="top" expand="lg">
      <Container>
<Navbar.Brand href="#home">Time-Zones</Navbar.Brand>
      </Container>
      <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}