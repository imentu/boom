<template>
  <draggable class="dragArea" :list="props.list" :group="{ name: 'g1' }" item-key="_id">
    <template #item="{ element }">
      <div class="d-flex pa-4">
        <v-checkbox-btn :model-value="element.checked" class="pe-2"
          @click="() => props.toggleChecked(element)"></v-checkbox-btn>
        <h4>{{ element.title }}</h4>
        <div style="padding-left: 8px; width: 200px;">
          <TodoItemList :toggle-checked="props.toggleChecked" :list="element.subItems" />
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable';
import { TodoItem } from '@/types/TodoItem';
import { ITodoItemProps } from './TodoItemProps';

const props = defineProps<{ list: ITodoItemProps[], toggleChecked: (item: TodoItem) => void }>()
</script>

<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
