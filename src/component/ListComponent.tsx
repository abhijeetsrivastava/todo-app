import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { Form } from "./Form";
import { StylishCard } from "./ui";

export const ListComponent: React.SFC<ListComponentProps> = (props) => (
  <StylishCard id={props.id}>
    <Card.Body>
      <Card.Title>
        <Row>
          <Col xs={12} md={8}>
            <FaExpandArrowsAlt className="drag-handle" /> {props.name}
          </Col>
          <Col xs={6} md={4} className="text-right">
            <IoMdCloseCircleOutline
              onClick={() => props.deleteList(props.id)}
            />
          </Col>
        </Row>
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
  name: string;
  addTodo: (text: string) => void;
  deleteList: (id: string) => void;
}
