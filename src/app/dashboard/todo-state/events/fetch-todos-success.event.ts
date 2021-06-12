import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { FEATURE_KEY } from "../todo.selectors";

export const fetchTodosSuccess = createEvent<IFetchTodosSucessEventParams>(
    FEATURE_KEY, 'Fetch todos success', todoCommands.fetchTodos.type,
);

export interface IFetchTodosSucessEventParams {
    todos: ITodo[];
}
