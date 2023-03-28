import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Gardnr</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#"><SearchBar></SearchBar></Nav.Link>
            <Nav.Link eventKey={2} href="#">
              link
            </Nav.Link>
            <Nav.Link href="/1">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
