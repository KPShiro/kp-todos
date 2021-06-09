import { FEATURE_ACTION_KEY } from "@app/loading/state/loading.state";
import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { FEATURE_KEY } from "../todo.selectors";

const actionName = createActionName(FEATURE_KEY, 'Fetch todos');

export const fetchTodos = createAction(actionName, () => ({
    [FEATURE_ACTION_KEY]: { add: actionName },
}));
