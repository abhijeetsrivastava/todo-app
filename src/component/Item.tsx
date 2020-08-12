import React from "react";

//import "../css/Item.css";

import { Form } from "react-bootstrap";
import { ItemData } from "../model/ItemData";

export class Item extends React.Component<ItemProps> {
  render() {
    return (
      <Form.Check
        custom
        className={
          this.props.item.completed ? "todo-item-unchecked" : "todo-item"
        }
        type="checkbox"
        id={parseInt(this.props.listId) + "-checkbox-" + this.props.item.id}
        label={this.props.item.text}
        onChange={() => this.props.onClick(this.props.item.id)}
        checked={this.props.item.completed}
      />
    );
  }
}

interface ItemProps {
  item: ItemData;
  listId: string;
  onClick: (id: number) => void;
}
