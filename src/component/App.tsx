import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { GenericList } from "./GenericList";
import { createList, List as ListModel } from "../model";
import { NotFoundPage } from "./NotFoundPage";
import { ConfirmationModal } from "./ConfirmationModal";

const App = () => {
  const [lists, setLists] = useState<Array<ListModel>>([]);
  const [term, setTerm] = useState<string>("");
  const [deleteListId, setDeleteListId] = useState<string>("");

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

  const updatedList = (id: string) => {
    setLists(
      lists.map((list: ListModel) =>
        list.id === id ? { ...list, updatedAt: Date.now() } : list
      )
    );
  };

  const deleteList = () => {
    setLists(lists.filter((list) => list.id !== deleteListId));
    setDeleteListId("");
    localStorage.removeItem(deleteListId);
  };

  return (
    <Router>
      <Header
        setFilter={(term: string) => setTerm(term)}
        addTodoList={addTodoList}
        disabled={term.length === 0}
      />
      <Switch>
        <Route exact path="/important">
          <GenericList
            list={filteredLists}
            setList={setLists}
            deleteList={(id: string) => setDeleteListId(id)}
            updatedList={updatedList}
          />
        </Route>
        <Route exact path="/">
          <GenericList
            list={filteredLists}
            setList={setLists}
            deleteList={(id: string) => setDeleteListId(id)}
            updatedList={updatedList}
          />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <ConfirmationModal
        show={deleteListId.length !== 0}
        onClose={() => setDeleteListId("")}
        onConfirm={deleteList}
      />
      <Footer />
    </Router>
  );
};

export default App;
