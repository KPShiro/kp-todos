import { TodoListState } from "src/app/todo-list/ngrx/todo-list.state";

export interface AppState {
  todosList?: TodoListState;
}
