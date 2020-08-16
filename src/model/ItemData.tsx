export interface ItemData {
  id: number;
  text: string;
  completed: boolean;
  important: boolean;
}

export const emptyItem: ItemData = {
  id: 0,
  text: "",
  completed: false,
  important: false,
};

export interface ListData {
  id: string;
  name: string;
  items: ItemData[];
}
