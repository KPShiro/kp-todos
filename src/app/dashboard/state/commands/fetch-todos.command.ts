import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../dashboard.selectors";

export const fetchTodos = createAction(
    createActionName(FEATURE_KEY, 'Fetch todos'),
);
