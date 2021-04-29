import * as actions from './todo-list.actions';

import { Action, createReducer, on } from "@ngrx/store";
import { TodoListState, TODO_LIST_INITIAL_STATE } from "./todo-list.state";

const todoListReducer = createReducer(
    TODO_LIST_INITIAL_STATE,
    on(actions.create, (state, { text }) => ({ ...state, todos: [ ...state.todos, text ] }))
);

export function reducer(state: TodoListState | undefined, action: Action) {
    return todoListReducer(state, action);
}
