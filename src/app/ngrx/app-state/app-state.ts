import { LoadingState } from "../loading-state/loading-state";
import { TodoState } from "../todo-state/todo-state";

export interface AppState {
    loading?: LoadingState;
    todo?: TodoState;
}
