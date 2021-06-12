import * as todoCommands from '../commands';

import { createEvent } from '@app/shared/functions/state-helpers';
import { FEATURE_KEY } from "../todo.selectors";

export const fetchTodosError = createEvent<IFetchTodosErrorEventParams>(
    FEATURE_KEY, 'Fetch todos error', todoCommands.fetchTodos.type,
);

export interface IFetchTodosErrorEventParams {
    error: any;
}
