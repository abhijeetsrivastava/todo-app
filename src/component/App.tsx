import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { GenericList } from "./list";
import { createList, List as ListModel } from "../model";
import { NotFoundPage } from "./NotFoundPage";
import { ConfirmationModal } from "./ConfirmationModal";
import { Setting, createSetting } from "../model";
import { Alert } from "./ui";

const App = () => {
  const [lists, setLists] = useState<Array<ListModel>>([]);
  const [term, setTerm] = useState<string>("");
  const [deleteListId, setDeleteListId] = useState<string>("");
  const [setting, setSetting] = useState<Setting>(createSetting());
  const [alertMsg, setAlert] = useState<string>("");

  useEffect(() => {
    const lists = localStorage.getItem("lists");
    const jsonLists: ListModel[] = JSON.parse(lists || "[]");
    setLists(jsonLists);

    const defaultSetting = createSetting();
    const setting = localStorage.getItem("settings");
    const json: Setting = JSON.parse(setting || JSON.stringify(defaultSetting));
    setSetting(json);
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(setting));
  }, [setting]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const filteredLists = lists.filter((list) =>
    list.name.toLowerCase().includes(term.toLowerCase())
  );

  const addTodoList = (name: string) => {
    setAlert("created");
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
    setAlert("deleted");
    setLists(lists.filter((list) => list.id !== deleteListId));
    setDeleteListId("");
    localStorage.removeItem(deleteListId);
  };

  return (
    <Router>
      <Header
        setFilter={(term: string) => setTerm(term)}
        addTodoList={addTodoList}
        disabledCreate={term.length === 0}
      />
      <Alert message={alertMsg} clearMessage={() => setAlert("")} />
      <Switch>
        <Route exact path="/important">
          <GenericList
            list={filteredLists}
            setList={setLists}
            deleteList={(id: string) => setDeleteListId(id)}
            updatedList={updatedList}
            showImportant={true}
            setting={setting}
          />
        </Route>
        <Route exact path="/">
          <GenericList
            list={filteredLists}
            setList={setLists}
            deleteList={(id: string) => setDeleteListId(id)}
            updatedList={updatedList}
            setting={setting}
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
      <Footer
        setting={setting}
        updateSetting={(updatedSetting: Setting) => setSetting(updatedSetting)}
      />
    </Router>
  );
};

export default App;
