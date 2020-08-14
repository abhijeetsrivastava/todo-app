import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

export const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>TODO App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link onClick={() => alert("clicked")}>Add Todo List</Nav.Link>
    </Nav>
  </Navbar>
);
