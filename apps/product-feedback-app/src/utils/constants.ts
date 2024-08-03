interface IFilterData {
  name: string;
  value: number;
}

export const filterData: IFilterData[] = [
  { name: 'All', value: 0 },
  { name: 'UI', value: 1 },
  { name: 'UX', value: 2 },
  { name: 'Enhancement', value: 3 },
  { name: 'Bug', value: 4 },
  { name: 'Feature', value: 5 },
];
