import { createCommand } from "@app/shared/functions/state-helpers";
import { FEATURE_KEY } from "../todo.selectors";

export const fetchTodos = createCommand(FEATURE_KEY, 'Fetch todos', true);
