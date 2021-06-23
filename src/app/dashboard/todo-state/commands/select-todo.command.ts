import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { todoStateKey } from "../todo.selectors";

export const selectTodo = createAction(
    createActionName(todoStateKey, 'Select todo'),
    (payload: ISelectTodoCommandParams) => ({ payload }),
);

export interface ISelectTodoCommandParams {
    id: string;
}
