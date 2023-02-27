import { ITodoItem } from '@/types/TodoItem'

export class StorageService {
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

  public async saveTodoItem(project: ITodoItem): Promise<string> {
    return (await this.db.post(project)).id
  }

  public async getTodoItemById(id: string): Promise<ITodoItem> {
    return await this.db.get<ITodoItem>(id)
  }

  public async getTodoItems(skip: number = 0, limit: number = 10) {
    return await this.db.find({ selector: { $_type: 'TodoItem', 'title': { $exists: true } }, sort: [{ 'title': 'asc', }], skip, limit })
  }

}


