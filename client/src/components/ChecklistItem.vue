<template>
  <div class="d-flex pa-4">
    <v-checkbox-btn :model-value="props.data.checked" @click="props.data.toggleChecked" class="pe-2"></v-checkbox-btn>
    <input type="text" :value="props.data.title">
    <v-icon :icon="icon" v-if="props.data.subItems.length > 0" @click="props.data.toggleExpand" />
  </div>
</template>

<script lang="ts" setup>
import { IChecklistItem } from '@/types/ICheckListItem'
import { computed, reactive } from 'vue'
import { mdiChevronLeft, mdiChevronDown } from '@mdi/js';
import { api } from '@/services/api'

const props = defineProps<{ data: IChecklistItem }>()
const icon = computed(() => props.data.expand ? mdiChevronDown : mdiChevronLeft)

const data = await api.checklists.getChecklistById('c9ab2375-a2af-4b39-805f-668f20bb12e6')
const checklist = reactive(data!)
console.log(data);


</script>
