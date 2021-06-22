import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { Update } from "@ngrx/entity";
import { todoStateKey } from "../todo.selectors";

export const updateTodoSuccess = createEvent<IUpdateTodoSucessEventParams>(
    todoStateKey,
    'Update todo success',
    todoCommands.updateTodo,
);

export interface IUpdateTodoSucessEventParams {
    update: Update<ITodo>;
}
