import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const todoDeselected = createEvent(
    todoStateKey,
    'Todo deselected',
    todoCommands.selectTodo,
);
