import * as dashboardEvents from './events';

import { Action, createReducer, on } from "@ngrx/store";
import { DashboardState, FEATURE_INITIAL_STATE } from "./dashboard.state";
import { replaceItem } from '@app/shared/functions/array-helpers';
import { ITodo } from '@app/shared/interfaces/todo.interface';

const reducer = createReducer(
    FEATURE_INITIAL_STATE,
    on(dashboardEvents.fetchTodosSuccessEvent, (state, { payload }) => ({ ...state, todos: [ ...payload.todos ] })),
    on(dashboardEvents.updateTodoSuccessEvent, (state, { payload }) => ({ ...state, todos: updateTodo(payload.todo, state.todos) })),
    on(dashboardEvents.deleteTodoSuccessEvent, (state, { payload }) => ({ ...state, todos: state.todos.filter((t) => t.id !== payload.id) })),
    on(dashboardEvents.createTodoSuccessEvent, (state, { payload }) => ({ ...state, todos: [ ...state.todos, payload.todo ] })),
);

function updateTodo(todo: ITodo, todos: ITodo[]): ITodo[] {
    const index: number = todos.findIndex((t) => t.id === todo.id);

    if(index === undefined || index === null) return todos;

    return replaceItem(todo, index, todos);
}

export function featureReducer(state: DashboardState | undefined, action: Action) {
    return reducer(state, action);
}
