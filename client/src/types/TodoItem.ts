import { v4 as uuidv4 } from 'uuid'

export interface ITodoItem extends PouchDB.Core.IdMeta, Partial<PouchDB.Core.GetMeta> {
  _id: PouchDB.Core.DocumentId
  _rev?: PouchDB.Core.RevisionId
  title: string
  checked: boolean
  startDate: Date | null
  createDate: Date
  $$root_id?: PouchDB.Core.DocumentId
  $$parent_id?: PouchDB.Core.DocumentId
}

export class TodoItem implements ITodoItem {
  _id: PouchDB.Core.DocumentId
  _rev?: PouchDB.Core.RevisionId
  title: string
  checked: boolean = false
  startDate: Date | null = null
  createDate: Date = new Date()
  subItems: ITodoItem[] = []
  $$root_id?: PouchDB.Core.DocumentId
  $$parent_id?: PouchDB.Core.DocumentId

  constructor(title: string, startDate: Date | null = null) {
    this._id = uuidv4()
    this.title = title
    this.startDate = startDate
  }

  public addSubItem(item: ITodoItem): void {
    this.subItems.push(item)
  }

  public generateSubItemsByTemplateTitle(templateTitle: string, startNumber: number, endNumber: number): void {
    if (startNumber > endNumber) {
      throw new Error(`Invalid Argument: startNumber:[${startNumber}] greater than endNumber:[${endNumber}]`)
    }

    for (let number = startNumber; number <= endNumber; number++) {
      this.addSubItem(new TodoItem(templateTitle.replace('$number', `${number}`)))
    }
  }

}
