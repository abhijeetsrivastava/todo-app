import React, { useState } from "react";
import { Form as BootStrapForm } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Button } from "./ui";

export const Header: React.SFC<HeaderProps> = ({
  addTodoList,
  disabledCreate,
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
        <Nav.Link as={Link} to="important">
          Important List
        </Nav.Link>
        <Nav.Link as={Link} to="features">
          Features
        </Nav.Link>
      </Nav>
      <BootStrapForm inline>
        <BootStrapForm.Control
          type="text"
          placeholder="Search/Create"
          className="mr-sm-2"
          value={value}
          onChange={(event) => onChangeHandler(event.target.value)}
        />
        <Button
          disabled={disabledCreate}
          onClick={onClickHandler}
          title="Add"
        />
      </BootStrapForm>
    </Navbar>
  );
};

interface HeaderProps {
  setFilter: (term: string) => void;
  disabledCreate: boolean;
  addTodoList: (name: string) => void;
}
