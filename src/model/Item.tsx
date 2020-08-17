import { v4 as uuidV4 } from "uuid";

export interface Item {
  id: string;
  listId: string;
  text: string;
  completed: boolean;
  important: boolean;
}

export const createItem = (listId: string, text: string): Item => {
  return {
    id: uuidV4(),
    listId: listId,
    text: text,
    completed: false,
    important: false,
  };
};
