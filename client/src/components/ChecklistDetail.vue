<template>
  <div>
    <div class="text-center" v-if="checklistDetail.loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div>
      <p>{{ checklistDetail.id }}</p>
      <p>{{ checklistDetail.title }}</p>
      <ChecklistItem :data="item" :key="item.id" v-for="item in checklistDetail.items" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useChecklistDetailStore } from '@/store/ChecklistDetailStore';
import ChecklistItem from './ChecklistItem.vue';

const props = defineProps<{ checklistId: string }>()

const checklistDetail = useChecklistDetailStore()
await checklistDetail.loadChecklistDetailById(props.checklistId)

</script>

