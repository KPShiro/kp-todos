import { createCommand } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const createTodo = createCommand<ICreateTodoCommandParams>(
    todoStateKey,
    'Create todo',
);

export interface ICreateTodoCommandParams {
    text: string;
}
