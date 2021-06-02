import { createActionName } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const createTodoSuccess = createAction(
    createActionName(FEATURE_KEY, 'Create todo success'),
    (payload: ICreateTodoSucessEventParams) => ({ payload }),
);

export interface ICreateTodoSucessEventParams {
    todo: ITodo;
}
