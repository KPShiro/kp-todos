import * as todoEvents from './events';
import * as todoCommands from './commands';

import { Action, createReducer, on } from '@ngrx/store';
import { TodoState, todoInitialState, adapter } from './todo.state';

const _reducer = createReducer(
    todoInitialState,
    on(todoEvents.fetchTodosSuccess, (state, { payload }) => adapter.setAll(payload.todos, state)),
    on(todoEvents.updateTodoSuccess, (state, { payload }) => adapter.updateOne(payload.update, state)),
    on(todoEvents.deleteTodoSuccess, (state, { payload }) => adapter.removeOne(payload.id, state)),
    on(todoEvents.createTodoSuccess, (state, { payload }) => adapter.addOne(payload.todo, state)),
    on(todoCommands.selectTodo, (state, { payload }) => ({ ...state, selectedId: payload.id })),
    on(todoCommands.deselectTodo, (state) => ({ ...state, selectedId: undefined })),
);

export function todoReducer(state: TodoState | undefined, action: Action) {
    return _reducer(state, action);
}
