import { Project } from '@/types/Progress';
import { StorageService } from '@/services/storage/index'
import * as PouchDB from 'pouchdb'
import { describe, it, beforeEach, afterEach, expect, beforeAll } from "vitest";

describe('storage', () => {
  const MemoryPouchDB = PouchDB.defaults({ adapter: 'memory' })

  beforeAll(() => {
    PouchDB.plugin(require('pouchdb-adapter-memory'))
  })

  let db: PouchDB.Database
  let storageService: StorageService

  beforeEach(() => {
    db = new MemoryPouchDB('boom_test')
    storageService = new StorageService(db)
  })

  afterEach(async () => {
    await db.destroy()
  })

  describe('Progress', () => {
    it('create new Project', async () => {
      const project = new Project('MVB', 30, new Date(2023, 1, 1))

      const id = await storageService.saveProject(project)

      const p2 = await storageService.getProject(id)

      console.log(p2);

      expect(p2.title).eq('MVB')

    })

    it('update an exists Project', async () => {
      const originalProject = new Project('MVB', 30, new Date(2023, 1, 1))
      const id = await storageService.saveProject(originalProject)

      const firstGetProject = await storageService.getProject(id)
      firstGetProject.title = 'MVB-Updated'
      await storageService.saveProject(firstGetProject)

      const latestGetProject = await storageService.getProject(id)

      console.log(await db.allDocs({ include_docs: true, attachments: true }));

      expect((await db.allDocs()).total_rows).eq(1)
      expect(latestGetProject.title).eq('MVB-Updated')
    })
  })

})
