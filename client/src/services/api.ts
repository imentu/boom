import { IChecklistDetail } from '@/types/Checklist'
import axios from 'axios'

export const api = {
  checklists: {
    async getChecklistDetailById(uuid: string): Promise<IChecklistDetail | null> {
      return (await axios.get(`/api/checklist/${uuid}`)).data
    }
  }
}
