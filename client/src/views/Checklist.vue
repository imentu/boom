<template>
  <div>
    <TodoItemList :list="todoItems.data" :toggleChecked="toggleChecked" />
  </div>

  <div style="margin-top: 16px;"></div>

  <div v-if="dones.length > 0">
    <h4>done</h4>
    <TodoItemList :list="dones" :toggleChecked="toggleChecked" />
  </div>

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
import TodoItemList from '@/components/TodoItem/TodoItemList.vue';
import StorageService from '@/services/storage/index.js';
import { ITodoItem, TodoItem } from '@/types/TodoItem';
import { mdiPlus } from '@mdi/js';
import { computed, reactive, ref } from 'vue';

const showDialog = ref(false)
const newTodoItem = reactive({ title: '', startDate: null })
const todoItems = reactive<{ data: ITodoItem[] }>({ data: [] })
const todos = computed(() => todoItems.data.filter(x => !x.checked))
const dones = computed(() => todoItems.data.filter(x => x.checked))

const reloadItems = async () => {
  todoItems.data = [...await StorageService.todoStorageService.getTodoItems()]

  todoItems.data.forEach(element => {
    element.subItems = []
  });
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

