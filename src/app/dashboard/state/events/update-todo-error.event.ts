import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../selectors";

export const updateTodoErrorEvent = createAction(
    createActionName(FEATURE_KEY, 'Update todo error'),
    (payload: IUpdateTodoErrorEventParams) => ({ payload }),
);

export interface IUpdateTodoErrorEventParams {
    error: any;
}
