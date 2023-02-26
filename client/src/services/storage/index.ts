import { IProject } from '@/types/Progress'
import * as PouchDB from 'pouchdb'

const IndexedPouchDB = PouchDB.defaults({adapter: 'indexeddb'})

export class StorageService {
  db: PouchDB.Database<{}>

  constructor(db: PouchDB.Database<{}>) {
    this.db = db
  }

  public async saveProject(project: IProject): Promise<string> {
    return (await this.db.post(project)).id
  }

  public async getProject(id: string): Promise<IProject> {
    return await this.db.get(id)
  }

}


