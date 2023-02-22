<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height w-25">
      <Suspense>
        <Checklist />
      </Suspense>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import Checklist from './ChecklistDetail.vue';

const app = useAppStore()

console.log(app);


</script>
