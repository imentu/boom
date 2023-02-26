import { differenceInDays, isFuture, isPast } from 'date-fns'

export interface IProgressLog {
  date: Date
  current: number
}

export interface IProject {
  // storaged properties
  title: string
  total: number
  startDate: Date
  progressLogs: IProgressLog[]

  // calculated properties
  current: number
  elapsedTime: string
  progress: number

  addProgressLog: (log: IProgressLog) => IProgressLog
}

export class Project implements IProject {
  title: string
  total: number
  startDate: Date
  progressLogs: IProgressLog[] = []

  constructor(title: string, total: number, startDate: Date) {
    this.title = title
    this.total = total
    this.startDate = startDate
  }

  public get current(): number {
    if (this.progressLogs.length === 0) {
      return 0
    }
    return 1
  }

  public get progress(): number {
    return (this.current / this.total) * 100
  }

  public get elapsedTime(): string {
    if (isFuture(this.startDate)) {
      return 'not started'
    }
    return `${differenceInDays(this.startDate, new Date())} days`
  }

  public addProgressLog(log: IProgressLog): IProgressLog {
    return {} as IProgressLog
  }
}
