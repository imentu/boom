import { ChecklistDetail } from '@/types/checklist/ChecklistDetail'
import axios from 'axios'

export const api = {
  checklists: {
    async getChecklistDetailById(uuid: string): Promise<ChecklistDetail | null> {
      return (await axios.get(`/api/checklist/${uuid}`)).data
    }
  }
}
