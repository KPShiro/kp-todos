import { createCommand } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const fetchTodos = createCommand(
    todoStateKey,
    'Fetch todos'
);
