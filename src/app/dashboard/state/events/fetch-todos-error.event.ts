import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const fetchTodosError = createAction(
    createActionName(FEATURE_KEY, 'Fetch todos error'),
    (payload: IFetchTodosErrorEventParams) => ({ payload }),
);

export interface IFetchTodosErrorEventParams {
    error: any;
}
