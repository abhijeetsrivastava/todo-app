import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { ReactSortableProps } from "react-sortablejs";

import { Features } from "./Features";
import { GenericList } from "./list";
import { List as ListModel } from "../model";
import { NotFoundPage } from "./NotFoundPage";
import { Setting } from "../model";

export const Body: React.SFC<ReactSortableProps<ListModel> & BodyProps> = (
  props
) => {
  return (
    <Container className="pt-3 pb-5">
      <Switch>
        <Route exact path="/important">
          <GenericList
            list={props.list}
            setList={props.setList}
            deleteList={props.deleteList}
            updatedList={props.updateList}
            showImportant={true}
            setting={props.setting}
          />
        </Route>
        <Route exact path="/features">
          <Features />
        </Route>
        <Route exact path="/">
          <GenericList
            list={props.list}
            setList={props.setList}
            deleteList={props.deleteList}
            updatedList={props.updateList}
            setting={props.setting}
          />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
};

interface BodyProps {
  deleteList: (id: string) => void;
  updateList: (id: string) => void;
  setting: Setting;
}
