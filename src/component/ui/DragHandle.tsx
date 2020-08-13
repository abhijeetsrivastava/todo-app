import React from "react";
import { SortableHandle } from "react-sortable-hoc";
import { FaExpandArrowsAlt } from "react-icons/fa";

export const DragHandle = SortableHandle(() => <FaExpandArrowsAlt />);
