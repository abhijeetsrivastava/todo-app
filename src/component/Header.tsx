import React from "react";
import { Navbar, Container } from "react-bootstrap";

import { Button } from "./ui";

export const Header = () => (
  <Navbar expand="lg" variant="dark" bg="dark">
    <Container className="justify-content-center">
      <Navbar.Brand href="#">TODO App</Navbar.Brand>
    </Container>
  </Navbar>
);
