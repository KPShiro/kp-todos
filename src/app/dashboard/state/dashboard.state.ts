import { ITodo } from "@app/shared/interfaces/todo.interface";

export interface DashboardState {
  todos: ITodo[];
  loading: boolean;
  error: Error | null;
}

export const DASHBOARD_INITIAL_STATE: DashboardState = {
    todos: [],
    loading: false,
    error: null,
};
