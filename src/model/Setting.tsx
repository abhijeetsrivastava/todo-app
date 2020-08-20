export enum SortingBy {
  "none",
  "important",
  "unchecked",
}

type SortingByStrings = keyof typeof SortingBy;

export interface Setting {
  sortBy: SortingByStrings;
}

export const createSetting = (sort?: SortingBy): Setting => {
  return sort
    ? { sortBy: SortingBy[sort] as SortingByStrings }
    : { sortBy: SortingBy[SortingBy.none] as SortingByStrings };
};
