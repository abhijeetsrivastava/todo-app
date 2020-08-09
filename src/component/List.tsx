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

import "../css/List.css";
import "../css/List.scss";

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

  componentDidMount() {
    // load itemdata for a list
  }

  private handleCheck = (id: number) => {
    console.log(this.props.id + " " + id);
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
      .map((item, idx) => (
        <Item key={idx} item={item} onClick={this.handleCheck} />
      ));
  };

  render() {
    return (
      <div>
        <Form onClick={this.addTodo} />
        {this.itemComponents()}
      </div>
    );
  }

  render1() {
    return (
      <MDBCol lg="4">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Todo List {this.props.id}</MDBCardTitle>
            <Form onClick={this.addTodo} />
            {this.itemComponents()}
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
  id: number;
}
