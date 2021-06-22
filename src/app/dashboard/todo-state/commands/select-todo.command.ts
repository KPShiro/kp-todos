import { createCommand } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const selectTodo = createCommand<ISelectTodoCommandParams>(
    todoStateKey,
    'Select todo'
);

export interface ISelectTodoCommandParams {
    id: string;
}
