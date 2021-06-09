import * as todoCommands from '../commands';

import { FEATURE_ACTION_KEY } from "@app/loading/state/loading.state";
import { createActionName } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../todo.selectors";

export const fetchTodosSuccess = createAction(
    createActionName(FEATURE_KEY, 'Fetch todos success'),
    (payload: IFetchTodosSucessEventParams) => ({ [FEATURE_ACTION_KEY]: { remove: todoCommands.fetchTodos.type }, payload }),
);

export interface IFetchTodosSucessEventParams {
    todos: ITodo[];
}
