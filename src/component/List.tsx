import React, { useState, useEffect } from "react";

import { Item } from "./Item";
import { Item as ItemModel, List as ListModel, createItem } from "../model";
import { ListComponent } from "./ListComponent";

export const List: React.SFC<ListProps> = (props) => {
  const [items, setItems] = useState<Array<ItemModel>>([]);

  useEffect(() => {
    const json = localStorage.getItem(props.id);
    const items: Array<ItemModel> = JSON.parse(json || "[]");
    setItems(items);
  }, [props.id]);

  useEffect(() => {
    localStorage.setItem(props.id, JSON.stringify(items));
  }, [items, props.id]);

  const handleCheck = (id: string) => {
    setItems(
      items.map((item: ItemModel) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    props.updatedList(props.id);
  };

  const handleImportantToggle = (id: string) => {
    setItems(
      items.map((item: ItemModel) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
    props.updatedList(props.id);
  };

  const addTodo = (text: string) => {
    setItems([...items, createItem(props.id, text)]);
    props.updatedList(props.id);
  };

  const deleteTodo = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const itemComponents = items
    .sort((item1, item2) =>
      item1.completed && item2.completed ? 0 : item1.completed ? 1 : -1
    )
    .map((item) => (
      <Item
        key={item.id}
        item={item}
        onImportantToggle={handleImportantToggle}
        onClick={handleCheck}
      />
    ));

  return (
    <ListComponent
      id={props.id}
      deleteList={props.deleteList}
      list={props.list}
      addTodo={addTodo}
    >
      {itemComponents}
    </ListComponent>
  );
};

interface ListProps {
  id: string;
  list: ListModel;
  deleteList: (id: string) => void;
  updatedList: (id: string) => void;
}
