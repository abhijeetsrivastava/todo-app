import React from "react";
import { SortableHandle } from "react-sortable-hoc";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DragHandle = SortableHandle(() => (
  <FontAwesomeIcon icon={faTasks} />
));
