import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";
import { AsyncActionStatus } from '@app/loading/state/loading.reducer';

export const updateTodoError = createEvent<IUpdateTodoErrorEventParams>(
    todoStateKey,
    'Update todo error',
    todoCommands.updateTodo,
    AsyncActionStatus.FAILURE,
);

export interface IUpdateTodoErrorEventParams {
    error: any;
}
