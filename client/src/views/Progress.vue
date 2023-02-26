<template>
    <v-list density="compact">
      <v-list-item v-for="item in list" :key="item.title" lines="two">
        <template v-slot:title>
          <h4>{{ item.title }}</h4>
        </template>
        <template v-slot:subtitle>
          {{ item.days }} days
        </template>
        <template v-slot:append>
          <v-progress-circular :model-value="(item.current / item.total) * 100" color="primary"
            :size="30"></v-progress-circular>
        </template>
      </v-list-item>
    </v-list>
    <v-btn class="add-btn" color="primary" :icon="mdiPlus"></v-btn>
</template>

<script lang="ts" setup>
import { mdiPlus } from '@mdi/js';


const list = [
  {
    title: 'lorem vocalajusd builder',
    current: 4,
    total: 30,
    days: 21
  },
  {
    title: 'Ekhjasd word',
    current: 17,
    total: 360,
    days: 3
  },
  {
    title: 'lorem vocalajusd builder',
    current: 4,
    total: 30,
    days: 300
  }
]
</script>

<style>
.add-btn {
  position: fixed !important;
  right: 28px;
  bottom: 80px;
}
</style>
