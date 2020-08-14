import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Header: React.SFC<HeaderProps> = ({ addTodoList }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand>TODO App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link onClick={() => addTodoList("new list")}>Add Todo List</Nav.Link>
    </Nav>
  </Navbar>
);

interface HeaderProps {
  addTodoList: (name: string) => void;
}
