export interface ChecklistItemProps {
  id: string,
  title: string,
  checked: boolean,
  expand: boolean,
  subItems: ChecklistItemProps[]
}
