export interface IChecklistItem {
  id: string,
  title: string,
  checked: boolean,
  expand: boolean,
  subItems: IChecklistItem[]
}
export interface IChecklistDetail {
  id: string
  title: string
  items: IChecklistItem[]
}
