export interface ItemData {
  id: number;
  text: string;
  completed: boolean;
}

export interface ListData {
  id: string;
  name: string;
  items: ItemData[];
}
