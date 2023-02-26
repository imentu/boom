<template>
  <div class="d-flex pa-4">
    <v-checkbox-btn :model-value="props.data.checked" class="pe-2"
      @click="() => checklistDetail.toggleChecked(props.data)"></v-checkbox-btn>
    <input type="text" :value="props.data.title">
    <v-icon :icon="expandIcon" v-if="props.data.subItems.length > 0"
      @click="() => checklistDetail.toggleExpand(props.data)" />
  </div>
  <div style="padding-left: 8px;" v-if="props.data.expand">
    <ChecklistItem :data="subItem" :key="subItem.id" v-for="subItem in props.data.subItems" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { IChecklistItem as ChecklistItemDetail } from '../types/Checklist';
import { mdiChevronLeft, mdiChevronDown } from '@mdi/js';
import { useChecklistDetailStore } from '@/store/ChecklistDetailStore';

const props = defineProps<{ data: ChecklistItemDetail }>()

enum EventType {
  ToggleChecked = 'toggle-checked',
  ToggleExpand = 'toggle-expand'
}

interface Emits {
  (e: EventType.ToggleChecked, target: ChecklistItemDetail): void
  (e: EventType.ToggleExpand, target: ChecklistItemDetail): void
}

const expandIcon = computed(() => props.data.expand ? mdiChevronDown : mdiChevronLeft)

const checklistDetail = useChecklistDetailStore()

</script>
