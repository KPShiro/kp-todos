import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const deleteTodoSuccessEvent = createAction(
    createActionName(FEATURE_KEY, 'Delete todo success'),
    (payload: IDeleteTodoSucessEventParams) => ({ payload }),
);

export interface IDeleteTodoSucessEventParams {
    id: string;
}
