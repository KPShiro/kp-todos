import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../todo.selectors";

export const deleteTodoError = createAction(
    createActionName(FEATURE_KEY, 'Delete todo error'),
    (payload: IDeleteTodoErrorEventParams) => ({ payload }),
);

export interface IDeleteTodoErrorEventParams {
    error: any;
}
