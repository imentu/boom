import { TodoStorageService } from '@/services/storage/TodoStorageService'
import { TodoItem } from '@/types/TodoItem';
import * as PouchDB from 'pouchdb'
import { describe, it, beforeEach, afterEach, expect, beforeAll } from "vitest";

describe('storage', () => {
  const MemoryPouchDB = PouchDB.defaults({ adapter: 'memory' })

  beforeAll(() => {
    PouchDB.plugin(require('pouchdb-adapter-memory'))
    PouchDB.plugin(require('pouchdb-find'))
  })

  let db: PouchDB.Database
  let storageService: TodoStorageService

  beforeEach(() => {
    db = new MemoryPouchDB('boom_test')
    storageService = new TodoStorageService(db)
  })

  afterEach(async () => {
    await db.destroy()
  })

  describe('Progress', () => {
    it('create new TodoItem', async () => {
      const originalProject = new TodoItem('T1', new Date(2023, 1, 1))
      originalProject.generateSubItemsByTemplateTitle('unit $number', 1, 3)

      const id = await storageService.saveTodoItem(originalProject)

      const retrivedProject = await storageService.getTodoItemById(id)
      expect(retrivedProject.title).eq('T1')
      expect(retrivedProject.subItems.length).eq(3)
      expect(retrivedProject.subItems[0].title).eq('unit 1')
      expect(retrivedProject.subItems[1].title).eq('unit 2')
      expect(retrivedProject.subItems[2].title).eq('unit 3')
    })

    it('update an exists Project', async () => {
      const originalProject = new TodoItem('MVB', new Date(2023, 1, 1))
      const id = await storageService.saveTodoItem(originalProject)

      const firstGetProject = await storageService.getTodoItemById(id)
      firstGetProject.title = 'MVB-Updated'
      await storageService.saveTodoItem(firstGetProject)

      const latestGetProject = await storageService.getTodoItemById(id)
      expect((await db.allDocs()).total_rows).eq(1)
      expect(latestGetProject.title).eq('MVB-Updated')
    })

    it('get TodoItems', async () => {
      await storageService.createIndex()

      const item1 = new TodoItem('i1')
      const item2 = new TodoItem('i2')
      const item3 = new TodoItem('i3')

      await storageService.saveTodoItem(item1)
      await storageService.saveTodoItem(item2)
      await storageService.saveTodoItem(item3)

      const items = await storageService.getTodoItems(1, 2)

      expect((items.docs[0] as TodoItem).title).eq('i2')
      expect((items.docs[1] as TodoItem).title).eq('i3')
    })
  })

})
