export interface IChecklistItem {
  id: string,
  title: string,
  checked: boolean,
  expand: boolean,
  subItems: IChecklistItem[]

  toggleChecked: () => void
  toggleExpand: () => void
}
