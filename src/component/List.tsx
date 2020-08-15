import React, { useState } from "react";

import { Item } from "./Item";
import { ItemData } from "../model/ItemData";
import { ListComponent } from "./ListComponent";

export const List: React.SFC<ListProps> = (props) => {
  const [items, setItems] = useState(props.items);

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
    <ListComponent id={props.id} addTodo={addTodo}>
      {itemComponents}
    </ListComponent>
  );
};

interface ListProps {
  id: string;
  items: Array<ItemData>;
}
