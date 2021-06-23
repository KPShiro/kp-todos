import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction } from "@ngrx/store";
import { todoStateKey } from "../todo.selectors";

export const deselectTodo = createAction(
    createActionName(todoStateKey, 'Deselect todo'),
);
