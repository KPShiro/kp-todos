import * as todoCommands from '../commands';

import { createEvent } from '@app/shared/functions/state-helpers';
import { todoStateKey } from "../todo.selectors";
import { AsyncActionStatus } from '@app/ngrx/loading-state/loading.reducer';

export const fetchTodosError = createEvent<IFetchTodosErrorEventParams>(
    todoStateKey,
    'Fetch todos error',
    todoCommands.fetchTodos,
    AsyncActionStatus.FAILURE
);

export interface IFetchTodosErrorEventParams {
    error: any;
}
