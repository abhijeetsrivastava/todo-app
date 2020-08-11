import React from "react";
import { Card } from "react-bootstrap";

import { Form } from "./Form";
import { StylishCard } from "./StylishCard";

export const ListComponent: React.SFC<ListComponentProps> = (props) => (
  <StylishCard id={props.id}>
    <Card.Body>
      <Card.Title>Todo List {props.id}</Card.Title>
      <Form onClick={props.addTodo} />
      <div>{props.itemComponents}</div>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>{" "}
  </StylishCard>
);

interface ListComponentProps {
  id: number;
  addTodo: (text: string) => void;
  itemComponents: React.ReactNode;
}
