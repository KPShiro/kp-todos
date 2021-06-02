import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const updateTodoError = createAction(
    createActionName(FEATURE_KEY, 'Update todo error'),
    (payload: IUpdateTodoErrorEventParams) => ({ payload }),
);

export interface IUpdateTodoErrorEventParams {
    error: any;
}
