import React, { useState } from "react";
import { Form as BootStrapForm } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Button } from "./ui";

export const Header: React.SFC<HeaderProps> = ({
  addTodoList,
  disabled,
  setFilter,
}) => {
  const [value, setValue] = useState("");

  const onClickHandler = () => {
    addTodoList(value);
  };

  const onChangeHandler = (term: string) => {
    setValue(term);
    setFilter(term);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        TODO App
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="today">
          Today List
        </Nav.Link>
        <Nav.Link as={Link} to="important">
          Important List
        </Nav.Link>
      </Nav>
      <BootStrapForm inline>
        <BootStrapForm.Control
          type="text"
          placeholder="Search/Create"
          className="mr-sm-2"
          value={value}
          onChange={(event) => onChangeHandler(event.target.value.trim())}
        />
        <Button disabled={disabled} onClick={onClickHandler} title="Add" />
      </BootStrapForm>
    </Navbar>
  );
};

interface HeaderProps {
  setFilter: (term: string) => void;
  disabled: boolean;
  addTodoList: (name: string) => void;
}
