import React, { useState } from "react";
import { Form as BootStrapForm } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

import { Button } from "./ui";

export const Header: React.SFC<HeaderProps> = ({ addTodoList }) => {
  const [value, setValue] = useState("");

  const onClickHandler = () => {
    if (value.length === 0) {
      alert("Please specify a value");
    } else {
      addTodoList(value);
      setValue("");
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>TODO App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#today">Today List</Nav.Link>
        <Nav.Link href="#important">Important List</Nav.Link>
      </Nav>
      <BootStrapForm inline>
        <BootStrapForm.Control
          type="text"
          placeholder="New Todo List"
          className="mr-sm-2"
          isInvalid={value === ""}
          isValid={value !== ""}
          value={value}
          onChange={(event) => setValue(event.target.value.trim())}
        />
        <BootStrapForm.Control.Feedback>
          Looks good
        </BootStrapForm.Control.Feedback>
        <Button disabled={false} onClick={onClickHandler} title="Add" />
      </BootStrapForm>
    </Navbar>
  );
};

interface HeaderProps {
  addTodoList: (name: string) => void;
}
