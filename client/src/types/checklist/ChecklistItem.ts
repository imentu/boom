export interface ChecklistItem {
  id: string,
  title: string,
  checked: boolean,
  expand: boolean,
  subItems: ChecklistItem[]
}
