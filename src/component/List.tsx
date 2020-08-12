import React from "react";
import { Card } from "react-bootstrap";

import { Item } from "./Item";
import { ItemData } from "../model/ItemData";
import { ListComponent } from "./ListComponent";

export class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  private handleCheck = (id: number) => {
    console.log(id);
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
          listId={this.props.id}
          item={item}
          onClick={this.handleCheck}
        />
      ));
  };

  render() {
    return (
      <ListComponent id={this.props.id} addTodo={this.addTodo}>
        {this.itemComponents()}
      </ListComponent>
    );
  }
}

interface ListState {
  items: Array<ItemData>;
}

interface ListProps {
  id: string;
  items: Array<ItemData>;
}
