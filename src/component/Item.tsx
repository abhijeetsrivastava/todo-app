import React from "react";
import { Form } from "react-bootstrap";

import { Item as ItemModel } from "../model";
import { StarIcon, StarFillIcon } from "./ui";
import { MdToday } from "react-icons/md";

export const Item: React.SFC<ItemProps> = ({
  item,
  onClick,
  onImportantToggle,
}) => {
  return (
    <Form inline>
      <Form.Check
        custom
        className={item.completed ? "todo-item-unchecked" : "todo-item"}
        type="checkbox"
        id={item.id + "-checkbox"}
        label={" "}
        onChange={() => onClick(item.id)}
        checked={item.completed}
      />
      <div onClick={() => onImportantToggle(item.id)}>
        {item.important ? <StarFillIcon /> : <StarIcon />}
      </div>
      <div onClick={() => console.log("marked")}>
        <MdToday />
      </div>
      {item.text}
    </Form>
  );
};

interface ItemProps {
  item: ItemModel;
  onClick: (id: string) => void;
  onImportantToggle: (id: string) => void;
}
