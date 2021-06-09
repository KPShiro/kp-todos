import * as todoCommands from '../commands';

import { FEATURE_ACTION_KEY } from "@app/loading/state/loading.state";
import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../todo.selectors";

export const fetchTodosError = createAction(
    createActionName(FEATURE_KEY, 'Fetch todos error'),
    (payload: IFetchTodosErrorEventParams) => ({ [FEATURE_ACTION_KEY]: { remove: todoCommands.fetchTodos.type }, payload }),
);

export interface IFetchTodosErrorEventParams {
    error: any;
}
