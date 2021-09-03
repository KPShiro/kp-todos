import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app-state/app-state";
import { TodoState, todoStateEntityAdapter, TODO_STATE_KEY } from "./todo-state";

const entitiySelectors = todoStateEntityAdapter.getSelectors();

export const selectFeature = createFeatureSelector<AppState, TodoState>(TODO_STATE_KEY);

export const getTodos = createSelector(
    selectFeature,
    entitiySelectors.selectAll,
);

export const getSelectedTodoId = createSelector(
    selectFeature,
    (state) => state.selectedId,
);

export const getTodoById = (id: string) => createSelector(
    getTodos,
    (todos) => todos.find(x => x.id === id),
);
