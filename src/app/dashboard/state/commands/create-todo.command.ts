import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const createTodoCommand = createAction(
    createActionName(FEATURE_KEY, 'Create todo'),
    (payload: ICreateTodoCommandParams) => ({ payload }),
);

export interface ICreateTodoCommandParams {
    text: string;
}
