import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../todo.selectors";

export const createTodoError = createAction(
    createActionName(FEATURE_KEY, 'Create todo error'),
    (payload: ICreateTodoErrorEventParams) => ({ payload }),
);

export interface ICreateTodoErrorEventParams {
    error: any;
}
