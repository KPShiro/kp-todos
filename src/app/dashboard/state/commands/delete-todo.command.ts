import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const deleteTodo = createAction(
    createActionName(FEATURE_KEY, 'Delete todo'),
    (payload: IDeleteTodoCommandParams) => ({ payload }),
);

export interface IDeleteTodoCommandParams {
    id: string;
}
