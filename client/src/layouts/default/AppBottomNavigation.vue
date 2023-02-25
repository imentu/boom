<template>
  <v-bottom-navigation v-model="activeRoute" color="primary" grow>
    <v-btn v-for="item in routes" :key="item.path" :to="item.path">
      <v-icon :icon="item.icon" />
      {{ item.name }}
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
import { mdiHomeOutline, mdiListBoxOutline, mdiBullseye } from '@mdi/js'
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const routes = [
  { path: '/home', icon: mdiHomeOutline, name: 'Home' },
  { path: '/checklist', icon: mdiListBoxOutline, name: 'Checklist' },
  { path: '/progress', icon: mdiBullseye, name: 'Progress' },
]

const route = useRoute()
const activeRoute = computed(() => route.path)

</script>
