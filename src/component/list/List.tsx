import React, { useState, useEffect } from "react";

import { Item } from "../item";
import {
  Setting,
  Item as ItemModel,
  List as ListModel,
  createItem,
  SortingBy,
} from "../../model";
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
    const newItem = createItem(props.id, text);
    const item = props.showImportant
      ? { ...newItem, important: true }
      : newItem;
    setItems([...items, item]);
    props.updatedList(props.id);
  };

  const showItems: ItemModel[] = props.showImportant
    ? items.filter((item) => item.important)
    : items;

  const sortedItems = (): ItemModel[] => {
    if (props.setting.sortBy === SortingBy[SortingBy.unchecked]) {
      return showItems.sort((item1, item2) =>
        item1.completed && item2.completed ? 0 : item1.completed ? 1 : -1
      );
    } else if (props.setting.sortBy === SortingBy[SortingBy.important]) {
      return showItems.sort((item1, item2) =>
        item1.important && item2.important ? 0 : item1.important ? -1 : 1
      );
    } else {
      return showItems;
    }
  };

  const itemComponents = sortedItems().map((item) => (
    <Item
      key={item.id}
      item={item}
      onImportantToggle={
        !props.showImportant ? handleImportantToggle : () => {}
      }
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
  showImportant: boolean;
  setting: Setting;
}
