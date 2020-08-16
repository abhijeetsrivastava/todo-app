import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { ItemData } from "../model/ItemData";
import { FaStar } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdToday } from "react-icons/md";

export const Item: React.SFC<ItemProps> = ({
  item,
  listId,
  onClick,
  onImportantToggle,
}) => {
  return (
    <Form inline>
      <Form.Check
        custom
        className={item.completed ? "todo-item-unchecked" : "todo-item"}
        type="checkbox"
        id={parseInt(listId) + "-checkbox-" + item.id}
        label={" "}
        onChange={() => onClick(item.id)}
        checked={item.completed}
      />
      <div onClick={() => onImportantToggle(item.id)}>
        {item.important ? (
          <AiFillStar className="mr-1" />
        ) : (
          <AiOutlineStar className="mr-1" />
        )}
      </div>
      <div onClick={() => console.log("marked")}>
        <MdToday />
      </div>
      {item.text}
    </Form>
  );
};

interface ItemProps {
  item: ItemData;
  listId: string;
  onClick: (id: number) => void;
  onImportantToggle: (id: number) => void;
}
