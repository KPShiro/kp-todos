import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../selectors";

export const fetchTodosErrorEvent = createAction(
    createActionName(FEATURE_KEY, 'Fetch todos error'),
    (payload: IFetchTodosErrorEventParams) => ({ payload }),
);

export interface IFetchTodosErrorEventParams {
    error: any;
}
