import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/ngrx/app-state.interface";
import { TodoListState } from "./todo-list.state";

export const FEATURE_KEY = 'todosList';

export const selectFeature = createFeatureSelector<AppState, TodoListState>(FEATURE_KEY);

export const selectAllTodos = createSelector(
    selectFeature,
    (state: TodoListState) => state.todos,
);
