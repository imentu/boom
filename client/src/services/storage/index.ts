import BrowserPouchDB from "./db/BrowserPouchDB"
import { TodoStorageService } from "./TodoStorageService"

const todoStorageService = new TodoStorageService(new BrowserPouchDB('todo'))
await todoStorageService.createIndex()

export default {
  todoStorageService
}

