<template>
  <v-list density="compact">
    <v-list-item v-for="item in todos" :key="item.title" lines="two">
      <template v-slot:prepend>
        <v-checkbox-btn :model-value="item.checked" class="pe-2" @click="() => toggleChecked(item)"></v-checkbox-btn>
      </template>
      <template v-slot:title>
        <h4>{{ item.title }}</h4>
      </template>
      <template v-slot:subtitle>
        {{ item.days }} days
      </template>
      <template v-slot:append>
        <v-progress-circular :model-value="(item.current / item.total) * 100" color="primary" :size="30"
          v-if="item.subItems.length != 0"></v-progress-circular>
      </template>
    </v-list-item>
  </v-list>

  <div style="margin-top: 16px;"></div>

  <v-list density="compact" v-if="dones.length != 0">
    <v-list-subheader>
      Done
    </v-list-subheader>
    <v-list-item v-for="item in dones" :key="item.title" lines="two">
      <template v-slot:prepend>
        <v-checkbox-btn :model-value="item.checked" class="pe-2" @click="() => toggleChecked(item)"></v-checkbox-btn>
      </template>
      <template v-slot:title>
        <h4>{{ item.title }}</h4>
      </template>
      <template v-slot:append>
        <v-progress-circular :model-value="(item.current / item.total) * 100" color="primary" :size="30"
          v-if="item.subItems.length != 0"></v-progress-circular>
      </template>
    </v-list-item>
  </v-list>

  <v-btn class="add-btn" color="primary" :icon="mdiPlus" @click="showDialog = true"></v-btn>
  <v-dialog v-model="showDialog" persistent>
    <v-card>
      <v-card-title>Create a Todo Item</v-card-title>
      <v-container>
        <v-row>
          <v-text-field label="title" required v-model="newTodoItem.title"></v-text-field>
        </v-row>
        <v-row>
          <v-text-field label="start date" v-model="newTodoItem.startDate"></v-text-field>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="showDialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="() => {
          createNewTodoItem()
          showDialog = false
        }">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import StorageService from '@/services/storage/index.js'
import { ITodoItem, TodoItem } from '@/types/TodoItem';
import { mdiPlus } from '@mdi/js';
import { computed } from 'vue';
import { reactive } from 'vue';
import { ref } from 'vue';

const showDialog = ref(false)
const newTodoItem = reactive({ title: '', startDate: null })
const todoItems = reactive<{ data: ITodoItem[] }>({ data: [] })
const todos = computed(() => todoItems.data.filter(x => !x.checked))
const dones = computed(() => todoItems.data.filter(x => x.checked))

const reloadItems = async () => {
  todoItems.data = [...await StorageService.todoStorageService.getTodoItems()]
}
await reloadItems()

const createNewTodoItem = async () => {
  const item = new TodoItem(newTodoItem.title)
  await StorageService.todoStorageService.saveTodoItem(item)
  await reloadItems()
}



const toggleChecked = async (item: ITodoItem) => {
  item.checked = !item.checked
  await StorageService.todoStorageService.saveTodoItem(item)
  await reloadItems()
}

</script>

<style>
.add-btn {
  position: fixed !important;
  right: 28px;
  bottom: 80px;
}
</style>

