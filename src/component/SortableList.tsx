import React from "react";
import { SortableContainer } from "react-sortable-hoc";

import { List } from "./List";
import { SortableItem } from "./SortableItem";
import { List as ListModel } from "../model/List";

export const SortableList = SortableContainer(
  ({ lists }: { lists: ListModel[] }) => {
    return (
      <ul>
        {lists.map((data, index) => {
          const list = <List id={data.id} key={index} items={data.items} />;
          return (
            <SortableItem key={`item-${index}`} index={index} value={list} />
          );
          //return list;
        })}
      </ul>
    );
  }
);
