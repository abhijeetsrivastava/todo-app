import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { GenericList } from "./GenericList";
import { createList, List as ListModel } from "../model";
import { NotFoundPage } from "./NotFoundPage";

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
            deleteList={deleteList}
          />
        </Route>
        <Route exact path="/">
          <GenericList
            list={filteredLists}
            setList={setLists}
            deleteList={deleteList}
          />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
