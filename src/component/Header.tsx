import React, { useState } from "react";
import { Form as BootStrapForm } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

import { Button } from "./ui";

export const Header: React.SFC<HeaderProps> = ({ addTodoList }) => {
  const [value, setValue] = useState("");

  const onClickHandler = () => {
    addTodoList(value);
    setValue("");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>TODO App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Nav>
        <BootStrapForm inline>
          <BootStrapForm.Control
            type="text"
            placeholder="New Todo List"
            className="mr-sm-2"
            value={value}
            onChange={(event) => setValue(event.target.value.trim())}
          />
          <Button disabled={false} onClick={onClickHandler} title="Add" />
        </BootStrapForm>
      </Nav>
    </Navbar>
  );
};

interface HeaderProps {
  addTodoList: (name: string) => void;
}
