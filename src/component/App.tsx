import React, { useState, useEffect } from "react";
import { Container, CardColumns } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
import { ListData } from "../model/ItemData";

const App = () => {
  const emptyList: ListData[] = [];
  const [lists, setLists] = useState(emptyList);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const lists = localStorage.getItem("lists");
    const json = JSON.parse(lists || "[]");
    setLists(json);
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const filteredLists = lists.filter((list) =>
    list.name.toLowerCase().includes(term.toLowerCase())
  );

  const addTodoList = (name: string) => {
    setLists([...lists, { id: lists.length + "", name: name, items: [] }]);
  };

  return (
    <>
      <Header
        setFilter={(term: string) => setTerm(term)}
        addTodoList={addTodoList}
        disabled={filteredLists.length !== 0}
      />
      <Container className="pt-3">
        <CardColumns>
          <ReactSortable
            handle=".drag-handle"
            animation={150}
            list={lists}
            setList={setLists}
          >
            {filteredLists.map((data) => (
              <List
                id={data.id}
                key={data.id}
                name={data.name}
                items={data.items}
              />
            ))}
          </ReactSortable>
        </CardColumns>
      </Container>
      <Footer />
    </>
  );
};

export default App;
