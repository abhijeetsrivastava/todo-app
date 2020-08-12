import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import arrayMove from "array-move";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List as ListModel } from "../model/List";
import { SortableList } from "./SortableList";
import { itemData } from "../data/itemData";

class App extends React.Component<{}, { lists: ListModel[] }> {
  constructor(props: {}) {
    super(props);
    // TODO: change this
    this.state = {
      lists: [
        { id: "0", items: itemData },
        { id: "1", items: itemData },
        { id: "2", items: itemData },
        { id: "3", items: itemData },
        { id: "4", items: itemData },
        { id: "55555", items: itemData },
      ],
    };
  }

  public render() {
    return (
      <>
        <Header />
        <Container className="pt-4">
          <CardColumns>
            <SortableList
              axis="xy"
              useDragHandle={true}
              lists={this.state.lists}
              onSortEnd={this.onSortEnd}
            />
          </CardColumns>
        </Container>
        <Footer />
      </>
    );
  }

  // TODO this is probably wrong
  private onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    this.setState({
      lists: arrayMove(this.state.lists, oldIndex, newIndex),
    });
  };
}

export default App;
