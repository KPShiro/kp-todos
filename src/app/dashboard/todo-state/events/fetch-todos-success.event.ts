import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { todoStateKey } from "../todo.selectors";

export const fetchTodosSuccess = createEvent<IFetchTodosSucessEventParams>(
    todoStateKey,
    'Fetch todos success',
    todoCommands.fetchTodos,
);

export interface IFetchTodosSucessEventParams {
    todos: ITodo[];
}
