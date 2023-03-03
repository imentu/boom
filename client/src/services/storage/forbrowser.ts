import PouchDB from 'pouchdb'
import PouchDBFindPlugin from 'pouchdb-find'
import { TodoStorageService } from "./TodoStorageService"

PouchDB.plugin(PouchDBFindPlugin)

const BrowserPouchDB = PouchDB.defaults({})

const todoStorageService = new TodoStorageService(new BrowserPouchDB('todo'))
await todoStorageService.createIndex()

export default {
  todoStorageService
}

