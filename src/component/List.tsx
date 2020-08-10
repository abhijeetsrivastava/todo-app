import React from "react";
import { Card } from "react-bootstrap";
import { Item } from "./Item";

import { Form } from "./Form";
import { ItemData } from "../model/ItemData";

export class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  private handleCheck = (id: number) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.map((item: ItemData) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        ),
      };
    });
  };

  private addTodo = (text: string) => {
    this.setState((prevState) => {
      return {
        items: [
          ...prevState.items,
          { id: prevState.items.length + 1, text: text, completed: false },
        ],
      };
    });
  };

  private itemComponents = () => {
    return this.state.items
      .sort((item1, item2) =>
        item1.completed && item2.completed ? 0 : item1.completed ? 1 : -1
      )
      .map((item) => (
        <Item
          key={item.id}
          id={this.props.id}
          item={item}
          onClick={this.handleCheck}
        />
      ));
  };

  render() {
    return (
      <Card id={"card-" + this.props.id}>
        <Card.Body>
          <Card.Title>Todo List</Card.Title>
          <Form onClick={this.addTodo} />
          <div>{this.itemComponents()}</div>
        </Card.Body>
        <Card.Footer>
          <small style={{ color: "gray" }}>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  }
}

interface ListState {
  items: Array<ItemData>;
}

interface ListProps {
  id: number;
  items: Array<ItemData>;
}
