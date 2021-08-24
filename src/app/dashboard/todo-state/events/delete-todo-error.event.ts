import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";
import { AsyncActionStatus } from '@app/ngrx/loading-state/loading.reducer';

export const deleteTodoError = createEvent<IDeleteTodoErrorEventParams>(
    todoStateKey,
    'Delete todo error',
    todoCommands.deleteTodo,
    AsyncActionStatus.FAILURE
);

export interface IDeleteTodoErrorEventParams {
    error: any;
}
