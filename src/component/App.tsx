import React, { useState } from "react";
import { Container, CardColumns } from "react-bootstrap";
import arrayMove from "array-move";
import { SortEnd } from "react-sortable-hoc";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { SortableList } from "./SortableList";
import { itemData } from "../data/itemData";

const App = () => {
  const [lists, setLists] = useState([
    { id: "0", items: itemData },
    { id: "1", items: itemData },
    { id: "2", items: itemData },
    { id: "3", items: itemData },
    { id: "4", items: itemData },
    { id: "55555", items: itemData },
  ]);

  const onSortEnd = (sort: SortEnd) =>
    setLists(arrayMove(lists, sort.oldIndex, sort.newIndex));

  const addTodoList = (name: string) => {
    setLists([...lists, { id: name, items: [] }]);
  };

  return (
    <>
      <Header addTodoList={addTodoList} />
      <Container className="pt-4">
        <CardColumns>
          <SortableList
            axis="xy"
            useDragHandle={true}
            lists={lists}
            onSortEnd={onSortEnd}
          />
        </CardColumns>
      </Container>
      <Footer />
    </>
  );
};

export default App;
