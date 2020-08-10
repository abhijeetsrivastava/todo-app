import React from "react";
import { Card } from "react-bootstrap";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBView,
  MDBFooter,
} from "mdbreact";

import { Item } from "./Item";

import { Form } from "./Form";
import { ItemData } from "../model/ItemData";
import { itemData } from "../data/itemData";

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
        <Item key={item.id} item={item} onClick={this.handleCheck} />
      ));
  };

  render() {
    return (
      <MDBCol lg="6">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Todo List</MDBCardTitle>
            <Form onClick={this.addTodo} />
            <div>{this.itemComponents()}</div>
          </MDBCardBody>
          <MDBFooter>
            <small style={{ color: "gray" }}>Last updated 3 mins ago</small>
          </MDBFooter>
        </MDBCard>
      </MDBCol>
    );
  }
}

interface ListState {
  items: Array<ItemData>;
}

interface ListProps {
  items: Array<ItemData>;
}
