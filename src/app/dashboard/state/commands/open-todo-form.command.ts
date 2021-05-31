import { createActionName } from "@app/shared/functions/state-helpers";
import { ITodo } from "@app/shared/interfaces/todo.interface";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../selectors";

export const openTodoFormCommand = createAction(
    createActionName(FEATURE_KEY, 'Open todo form'),
    (payload?: IOpenTodoFormCommandParams) => ({ payload }),
);

export interface IOpenTodoFormCommandParams {
    todo: ITodo;
}
