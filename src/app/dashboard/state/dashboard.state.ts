import { ITodo } from "@app/shared/interfaces/todo.interface";

export interface DashboardState {
  todos: ITodo[];
}

export const FEATURE_INITIAL_STATE: DashboardState = {
    todos: [],
};
