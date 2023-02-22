<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height w-25">
      <ChecklistItem :data="item" v-for="item in list.items"></ChecklistItem>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import ChecklistItem from './ChecklistItem.vue';

const app = useAppStore()
const list = app.checklists[0]

</script>
