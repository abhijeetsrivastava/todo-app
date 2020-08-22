import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { List as ListModel } from "../../model";
import { ItemHeader } from "../item";
import { StylishCard, MoveIcon } from "../ui";

export const ListComponent: React.SFC<ListComponentProps> = (props) => {
  const updated = (): string => {
    const millis = Date.now() - props.list.updatedAt;
    const seconds = Math.floor(millis / 1000) % 60;
    const minutes = Math.floor(millis / (1000 * 60)) % 60;
    const hours = Math.floor(millis / (1000 * 60 * 60)) % 60;
    if (minutes === 0) return seconds + " secs";
    else if (hours === 0) return minutes + " mins";
    else return hours + " hours ";
  };

  return (
    <StylishCard id={props.id}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col xs={12} md={8}>
              <MoveIcon /> {props.list.name}
            </Col>
            <Col xs={6} md={4} className="text-right">
              <IoMdCloseCircleOutline
                onClick={() => props.deleteList(props.id)}
              />
            </Col>
          </Row>
        </Card.Title>
        <ItemHeader onClick={props.addTodo} />
        <div>{props.children}</div>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated {updated()} ago</small>
      </Card.Footer>
    </StylishCard>
  );
};

interface ListComponentProps {
  id: string;
  list: ListModel;
  addTodo: (text: string) => void;
  deleteList: (id: string) => void;
}
