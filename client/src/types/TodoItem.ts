export interface ITodoItem {
  _id: string | null
  _rev: string | null
  title: string
  checked: boolean
  startDate: Date | null
  createDate: Date
  subItems: ITodoItem[]
}

export class TodoItem implements ITodoItem {
  _id: string | null = null
  _rev: string | null = null
  title: string
  checked: boolean = false
  startDate: Date | null = null
  createDate: Date = new Date()
  subItems: ITodoItem[] = []

  constructor(title: string, startDate: Date | null = null) {
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
