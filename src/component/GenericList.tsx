import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import { ReactSortable, ReactSortableProps } from "react-sortablejs";

import { List } from "./List";
import { List as ListModel } from "../model";

export const GenericList: React.SFC<
  ReactSortableProps<ListModel> & GenericListProps
> = (props) => {
  return (
    <Container className="pt-3">
      <CardColumns>
        <ReactSortable
          handle=".drag-handle"
          animation={150}
          list={props.list}
          setList={props.setList}
        >
          {props.list.map((data) => (
            <List
              id={data.id}
              key={data.id}
              name={data.name}
              deleteList={props.deleteList}
            />
          ))}
        </ReactSortable>
      </CardColumns>
    </Container>
  );
};

interface GenericListProps {
  deleteList: (id: string) => void;
}
