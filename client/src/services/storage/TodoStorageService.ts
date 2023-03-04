import { ITodoItem } from '@/types/TodoItem'

export class TodoStorageService {
  db: PouchDB.Database<{}>

  constructor(db: PouchDB.Database<{}>) {
    this.db = db
  }

  async createIndex() {
    await this.db.createIndex({
      index: {
        fields: ['title']
      }
    })
  }

  public async saveTodoItem(project: ITodoItem): Promise<PouchDB.Core.DocumentId> {
    return (await this.db.post(project)).id
  }

  public async getTodoItemById(id: string): Promise<ITodoItem> {
    return await this.db.get(id)
  }

  public async getTodoItems(skip: number = 0, limit: number = 999999): Promise<ITodoItem[]> {
    const response = await this.db.find({ selector: { 'title': { $exists: true } }, sort: [{ 'title': 'asc', }], skip, limit })
    return response.docs.map(doc => doc as ITodoItem)
  }

}


