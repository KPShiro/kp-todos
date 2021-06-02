import { ITodo } from "@app/shared/interfaces/todo.interface";

export interface DashboardState {
  todos: ITodo[];
}

export const DASHBOARD_INITIAL_STATE: DashboardState = {
    todos: [],
};
