import { createActionName } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { Update } from "@ngrx/entity";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../todo.selectors";

export const updateTodo = createAction(
    createActionName(FEATURE_KEY, 'Update todo'),
    (payload: IUpdateTodoCommandParams) => ({ payload }),
);

export interface IUpdateTodoCommandParams {
    update: Update<ITodo>;
}
