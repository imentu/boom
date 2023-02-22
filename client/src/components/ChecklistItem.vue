<template>
  <div class="d-flex pa-4">
    <v-checkbox-btn :model-value="props.data.checked" class="pe-2"
      @click="() => emitToggleChecked(props.data)"></v-checkbox-btn>
    <input type="text" :value="props.data.title">
    <v-icon :icon="expandIcon" v-if="props.data.subItems.length > 0" @click="() => emitToggleExpand(props.data)" />
  </div>
  <div style="padding-left: 8px;" v-if="props.data.expand">
    <ChecklistItem :data="subItem" :key="subItem.id" v-for="subItem in props.data.subItems"
      @toggle-checked="() => emitToggleChecked(subItem)" @toggle-expand="() => emitToggleExpand(subItem)" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ChecklistItemProps } from './ChecklistItemProps';
import { mdiChevronLeft, mdiChevronDown } from '@mdi/js';

const props = defineProps<{ data: ChecklistItemProps }>()

enum EventType {
  ToggleChecked = 'toggle-checked',
  ToggleExpand = 'toggle-expand'
}

interface Emits {
  (e: EventType.ToggleChecked, target: ChecklistItemProps): void
  (e: EventType.ToggleExpand, target: ChecklistItemProps): void
}

const emit = defineEmits<Emits>()

const emitToggleChecked = (target: ChecklistItemProps) => emit(EventType.ToggleChecked, target)

const emitToggleExpand = (target: ChecklistItemProps) => emit(EventType.ToggleExpand, target)

const expandIcon = computed(() => props.data.expand ? mdiChevronDown : mdiChevronLeft)

</script>
