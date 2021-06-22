import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { todoStateKey } from "../todo.selectors";

export const createTodoSuccess = createEvent<ICreateTodoSucessEventParams>(
    todoStateKey,
    'Create todo success',
    todoCommands.createTodo,
);

export interface ICreateTodoSucessEventParams {
    todo: ITodo;
}
