import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import arrayMove from "array-move";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { SortableList } from "./SortableList";

class App extends React.Component<{}, { items: number[] }> {
  constructor(props: {}) {
    super(props);
    // TODO: change this
    this.state = {
      items: [1, 2, 3, 4, 5],
    };
  }

  public render() {
    return (
      <>
        <Header />
        <Container>
          <CardColumns>
            <SortableList
              axis="xy"
              items={this.state.items}
              onSortEnd={this.onSortEnd}
            />
            );
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
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
}

export default App;
