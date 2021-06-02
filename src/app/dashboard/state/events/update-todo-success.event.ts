import { createActionName } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const updateTodoSuccess = createAction(
    createActionName(FEATURE_KEY, 'Update todo success'),
    (payload: IUpdateTodoSucessEventParams) => ({ payload }),
);

export interface IUpdateTodoSucessEventParams {
    todo: ITodo;
}
