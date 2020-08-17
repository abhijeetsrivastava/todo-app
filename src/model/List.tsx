import { v4 as uuidV4 } from "uuid";

export interface List {
  id: string;
  name: string;
}

export const createList = (name: string): List => {
  return {
    id: uuidV4(),
    name: name,
  };
};
