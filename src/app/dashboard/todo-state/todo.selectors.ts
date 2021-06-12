import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/state/app.state";
import { TodoState, adapter } from "./todo.state";

const entitiySelectors = adapter.getSelectors();

export const FEATURE_KEY = 'todo';

export const selectFeature = createFeatureSelector<AppState, TodoState>(FEATURE_KEY);

export const getTodos = createSelector(
    selectFeature,
    entitiySelectors.selectAll,
);

export const getTodoById = (id: string) => createSelector(
    getTodos,
    (todos) => todos.find(x => x.id === id),
);
