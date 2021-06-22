import { createCommand } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const deleteTodo = createCommand<IDeleteTodoCommandParams>(
    todoStateKey,
    'Delete todo',
);

export interface IDeleteTodoCommandParams {
    id: string;
}
