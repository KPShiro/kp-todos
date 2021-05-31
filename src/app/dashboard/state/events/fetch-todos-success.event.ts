import { createActionName } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../selectors";

export const fetchTodosSuccessEvent = createAction(
    createActionName(FEATURE_KEY, 'Fetch todos success'),
    (payload: IFetchTodosSucessEventParams) => ({ payload }),
);

export interface IFetchTodosSucessEventParams {
    todos: ITodo[];
}
