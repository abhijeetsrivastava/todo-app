import React from "react";
import { Container, CardColumns } from "react-bootstrap";
import { ReactSortable, ReactSortableProps } from "react-sortablejs";

import { List } from "./List";
import { List as ListModel, Setting } from "../model";

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
              list={data}
              updatedList={props.updatedList}
              deleteList={props.deleteList}
              showImportant={!!props.showImportant}
              setting={props.setting}
            />
          ))}
        </ReactSortable>
      </CardColumns>
    </Container>
  );
};

interface GenericListProps {
  showImportant?: boolean;
  deleteList: (id: string) => void;
  updatedList: (id: string) => void;
  setting: Setting;
}

GenericList.defaultProps = {
  showImportant: false,
};
