import * as todoCommands from '../commands';

import { AsyncActionStatus } from "@app/loading/state/loading.reducer";
import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const createTodoError = createEvent<ICreateTodoErrorEventParams>(
    todoStateKey,
    'Create todo error',
    todoCommands.createTodo,
    AsyncActionStatus.FAILURE,
);

export interface ICreateTodoErrorEventParams {
    error: any;
}
