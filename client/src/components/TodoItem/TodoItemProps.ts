import { TodoItem } from "@/types/TodoItem";

export interface ITodoItemProps extends TodoItem {
  subItems: ITodoItemProps[]
}
