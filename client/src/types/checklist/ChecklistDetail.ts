import { ChecklistItem } from "../checklist/ChecklistItem"

export interface ChecklistDetail {
  id: string
  title: string
  items: ChecklistItem[]
}
