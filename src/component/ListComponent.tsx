import React from "react";
import { Card } from "react-bootstrap";

import { Form } from "./Form";
import { StylishCard } from "./ui";
import { FaExpandArrowsAlt } from "react-icons/fa";

export const ListComponent: React.SFC<ListComponentProps> = (props) => (
  <StylishCard id={props.id}>
    <Card.Body>
      <Card.Title>
        <FaExpandArrowsAlt className="handle" /> Todo List {props.id}
      </Card.Title>
      <Form onClick={props.addTodo} />
      <div>{props.children}</div>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </StylishCard>
);

interface ListComponentProps {
  id: string;
  addTodo: (text: string) => void;
}
