// Utilities
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { IChecklistItem } from '@/types/ICheckListItem'

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    const i1 = new ChecklistItemImpl()
    i1.title = 'item-1'
    const i1_1 = new ChecklistItemImpl()
    i1_1.title = 'item-1-1'
    const i1_2 = new ChecklistItemImpl()
    i1_2.title = 'item-1-2'
    i1.subItems = [i1_1, i1_2]

    const i2 = new ChecklistItemImpl()
    i2.title = 'item-2'
    return {
      checklists: [
        {
          id: uuidv4(),
          title: 'CH2',
          items: [i1, i2]
        }
      ]
    }
  },
})

interface AppState {
  checklists: Checklist[]
}

class Checklist {
  id: string
  title: string
  items: IChecklistItem[]

  constructor() {
    this.id = uuidv4()
    this.title = ''
    this.items = []
  }
}

class ChecklistItemImpl implements IChecklistItem {
  id: string
  title: string
  checked: boolean
  expand: boolean
  subItems: IChecklistItem[]

  constructor() {
    this.id = uuidv4()
    this.title = ''
    this.checked = false
    this.expand = false
    this.subItems = []
  }

  toggleChecked() {
    this.checked = !(this.checked)
  }

  toggleExpand() {
    this.expand = !(this.expand)
  }
}
