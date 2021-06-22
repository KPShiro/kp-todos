import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";
import { AsyncActionStatus } from '@app/loading/state/loading.reducer';

export const selectTodoError = createEvent<ISelectTodoErrorEventParams>(
    todoStateKey,
    'Select todo error',
    todoCommands.selectTodo,
    AsyncActionStatus.FAILURE,
);

export interface ISelectTodoErrorEventParams {
    error: any;
}
