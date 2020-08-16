import React, { useState, useEffect } from "react";

import { Item } from "./Item";
import { ItemData, ListData } from "../model/ItemData";
import { ListComponent } from "./ListComponent";

export const List: React.SFC<ListProps> = (props) => {
  const [items, setItems] = useState(props.items);

  useEffect(() => {
    const lists: ListData[] = JSON.parse(localStorage.getItem("lists") || "[]");
    const updatedLists = lists.map((list) =>
      list.id === props.id ? { ...list, items: items } : list
    );

    localStorage.setItem("lists", JSON.stringify(updatedLists));
  }, [items, props.id]);

  const handleCheck = (id: number) => {
    setItems(
      items.map((item: ItemData) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const addTodo = (text: string) => {
    setItems([
      ...items,
      { id: items.length + 1, text: text, completed: false },
    ]);
  };

  const itemComponents = items
    .sort((item1, item2) =>
      item1.completed && item2.completed ? 0 : item1.completed ? 1 : -1
    )
    .map((item) => (
      <Item key={item.id} listId={props.id} item={item} onClick={handleCheck} />
    ));

  return (
    <ListComponent
      id={props.id}
      deleteList={props.deleteList}
      name={props.name}
      addTodo={addTodo}
    >
      {itemComponents}
    </ListComponent>
  );
};

interface ListProps {
  id: string;
  name: string;
  items: Array<ItemData>;
  deleteList: (id: string) => void;
}
