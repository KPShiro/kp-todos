import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const selectTodoSuccess = createEvent<ISelectTodoSuccessEventParams>(
    todoStateKey,
    'Select todo success',
    todoCommands.selectTodo,
);

export interface ISelectTodoSuccessEventParams {
    id: string;
}
