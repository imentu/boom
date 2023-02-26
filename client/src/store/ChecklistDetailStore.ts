// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/api'
import { IChecklistItem } from '@/types/Checklist'

export const useChecklistDetailStore = defineStore('checklistDetail', () => {
  const id = ref<string>('')
  const title = ref<string>('')
  const items = ref<IChecklistItem[]>([])

  const loading = ref<boolean>(false)

  async function loadChecklistDetailById(_id: string): Promise<void> {
    loading.value = true

    try {
      const data = await api.checklists.getChecklistDetailById(_id)
      if (data) {
        id.value = data.id
        title.value = data.title
        items.value = data.items
      }
    } finally {
      loading.value = false
    }
  }


  function toggleChecked(target: IChecklistItem): void { target.checked = !target.checked }

  function toggleExpand(target: IChecklistItem): void { target.expand = !target.expand }


  return { id, title, items, loading, loadChecklistDetailById, toggleChecked, toggleExpand }
})
