import * as todoCommands from '../commands';

import { createEvent } from "@app/shared/functions/state-helpers";
import { todoStateKey } from "../todo.selectors";

export const todoSelected = createEvent<ITodoSelectedEventParams>(
    todoStateKey,
    'Todo selected',
    todoCommands.selectTodo,
);

export interface ITodoSelectedEventParams {
    id: string;
}
