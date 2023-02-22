import axios from 'axios'

interface Checklist {
  id: string
  title: string
  items: ChecklistItem[]
}

interface ChecklistItem {
  id: string
  title: string
  checked: boolean
  expand: boolean
  subItems: ChecklistItem[]
}

export const api = {
  checklists: {
    async getChecklistDetailById(uuid: string): Promise<Checklist | null> {
      return (await axios.get(`/api/checklist/${uuid}`)).data
    }
  }
}
