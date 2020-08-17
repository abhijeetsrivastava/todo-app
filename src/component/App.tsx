import React, { useState, useEffect } from "react";
import { Container, CardColumns } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
import { createList, List as ListModel } from "../model";

const App = () => {
  const [lists, setLists] = useState<Array<ListModel>>([]);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const lists = localStorage.getItem("lists");
    const jsonLists: ListModel[] = JSON.parse(lists || "[]");
    setLists(jsonLists);
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const filteredLists = lists.filter((list) =>
    list.name.toLowerCase().includes(term.toLowerCase())
  );

  const addTodoList = (name: string) => {
    setLists([...lists, createList(name)]);
  };

  const deleteList = (id: string) => {
    setLists(lists.filter((list) => list.id !== id));
    localStorage.removeItem(id);
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
                deleteList={deleteList}
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
