import { TodoListState } from "src/app/todo-list/state/todo-list.state";

export interface AppState {
  todos?: TodoListState;
}
