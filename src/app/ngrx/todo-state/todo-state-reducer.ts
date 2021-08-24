import * as TodoActions from './todo-state-actions';

import { Action, createReducer, on } from "@ngrx/store";
import { initialTodoState, TodoState, todoStateEntityAdapter } from "./todo-state";

const _reducer = createReducer(
    initialTodoState,
    on(TodoActions.fetchTodosSuccess, (state, { payload }) => todoStateEntityAdapter.setAll(payload.todos, state)),
    on(TodoActions.updateTodoSuccess, (state, { payload }) => todoStateEntityAdapter.updateOne(payload.update, state)),
    on(TodoActions.deleteTodoSuccess, (state, { payload }) => todoStateEntityAdapter.removeOne(payload.id, state)),
    on(TodoActions.createTodoSuccess, (state, { payload }) => todoStateEntityAdapter.addOne(payload.todo, state)),
    on(TodoActions.selectTodo, (state, { payload }) => ({ ...state, selectedId: payload.id })),
    on(TodoActions.deselectTodo, (state) => ({ ...state, selectedId: undefined })),
);

export function todoStateReducer(state: TodoState | undefined, action: Action) {
    return _reducer(state, action);
}
