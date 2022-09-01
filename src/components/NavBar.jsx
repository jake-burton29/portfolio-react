import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand>JAKE BURTON</Navbar.Brand>
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-me">
            <Nav.Link>Contact Me</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  );
}
