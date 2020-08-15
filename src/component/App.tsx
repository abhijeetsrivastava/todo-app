import React, { useState } from "react";
import { Container, CardColumns } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
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

  const addTodoList = (name: string) => {
    setLists([...lists, { id: name, items: [] }]);
  };
  const child = lists.map((data, index) => (
    <List id={data.id} key={index} items={data.items} />
  ));

  return (
    <>
      <Header addTodoList={addTodoList} />
      <Container className="pt-4">
        <CardColumns>
          <ReactSortable
            handle=".handle"
            animation={150}
            list={lists}
            setList={setLists}
          >
            {child}
          </ReactSortable>
        </CardColumns>
      </Container>
      <Footer />
    </>
  );
};

export default App;
