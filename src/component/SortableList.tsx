import React from "react";
import { SortableContainer } from "react-sortable-hoc";

import { List } from "./List";
import { itemData } from "../data/itemData";
import { SortableItem } from "./SortableItem";

export const SortableList = SortableContainer(
  ({ items }: { items: number[] }) => {
    return (
      <ul>
        {items.map((value, index) => {
          const list = <List id={value} items={itemData} />;
          return (
            <SortableItem key={`item-${index}`} index={index} value={list} />
          );
        })}
      </ul>
    );
  }
);
