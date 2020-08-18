import { v4 as uuidV4 } from "uuid";

export interface List {
  id: string;
  name: string;
  updatedAt: number; // type of date is number
}

export const createList = (name: string): List => {
  return {
    id: uuidV4(),
    name: name,
    updatedAt: Date.now(),
  };
};
