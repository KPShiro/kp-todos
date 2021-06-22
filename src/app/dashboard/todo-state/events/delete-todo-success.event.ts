import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const deleteTodoSuccess = createEvent<IDeleteTodoSucessEventParams>(
    todoStateKey,
    'Delete todo success',
    todoCommands.deleteTodo,
);

export interface IDeleteTodoSucessEventParams {
    id: string;
}
