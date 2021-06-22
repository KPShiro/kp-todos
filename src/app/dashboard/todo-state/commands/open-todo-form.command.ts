import { createCommand } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { todoStateKey } from "../todo.selectors";

export const openTodoForm = createCommand<IOpenTodoFormCommandParams>(
    todoStateKey,
    'Open todo form',
);

export interface IOpenTodoFormCommandParams {
    todo: ITodo;
}
