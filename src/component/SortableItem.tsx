import { SortableElement } from "react-sortable-hoc";

export const SortableItem = SortableElement(
  ({ value }: { value: JSX.Element }) => value
);
