import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Alert } from "./ui";
import { Body } from "./Body";
import { ConfirmationModal } from "./ConfirmationModal";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Setting, createSetting } from "../model";
import { createList, List as ListModel } from "../model";

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

  const updateList = (id: string) => {
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
        disabledCreate={term.trim().length === 0}
      />
      <Alert message={alertMsg} clearMessage={() => setAlert("")} />
      <Body
        list={filteredLists}
        setList={setLists}
        deleteList={(id: string) => setDeleteListId(id)}
        updateList={updateList}
        setting={setting}
      />
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
