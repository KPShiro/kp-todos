import * as dashboardActions from './dashboard.actions';
import * as dashboardEvents from './events';

import { Action, createReducer, on } from "@ngrx/store";
import { DashboardState, FEATURE_INITIAL_STATE } from "./dashboard.state";
import { replaceItem } from '@app/shared/functions/array-helpers';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Todo } from '@app/shared/models/todo.model';

const reducer = createReducer(
    FEATURE_INITIAL_STATE,
    on(dashboardActions.create, (state, { text }) => ({ ...state, todos: [ ...state.todos, new Todo(text) ] })),
    on(dashboardActions.update, (state, { todo }) => ({ ...state, todos: updateTodo(todo, state.todos) })),
    on(dashboardActions.remove, (state, { id }) => ({ ...state, todos: state.todos.filter((t) => t.id !== id) })),
    on(dashboardEvents.fetchTodosSuccessEvent, (state, { payload }) => ({ ...state, todos: [ ...payload.todos ] })),
);

function updateTodo(todo: ITodo, todos: ITodo[]): ITodo[] {
    const index: number = todos.findIndex((t) => t.id === todo.id);

    if(index === undefined || index === null) return todos;

    return replaceItem(todo, index, todos);
}

export function featureReducer(state: DashboardState | undefined, action: Action) {
    return reducer(state, action);
}
