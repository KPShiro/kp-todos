import { createCommand } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { Update } from "@ngrx/entity";
import { todoStateKey } from "../todo.selectors";

export const updateTodo = createCommand<IUpdateTodoCommandParams>(
    todoStateKey,
    'Update todo',
);

export interface IUpdateTodoCommandParams {
    update: Update<ITodo>;
}
