<template>
  <div>
    <p>{{ checklist.id }}</p>
    <p>{{ checklist.title }}</p>
    <ChecklistItem :data="item" @toggle-checked="toggleChecked" @toggle-expand="toggleExpand" :key="item.id"
      v-for="item in checklist.items" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { api } from '@/services/api'
import ChecklistItem from './ChecklistItem.vue';
import { ChecklistItemProps } from './ChecklistItemProps';

const data = await api.checklists.getChecklistDetailById('c9ab2375-a2af-4b39-805f-668f20bb12e6')
const checklist = reactive(data!)

const toggleChecked = (item: ChecklistItemProps) => item.checked = !item.checked
const toggleExpand = (item: ChecklistItemProps) => item.expand = !item.expand
</script>

