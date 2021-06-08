import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/state/app.state";
import { DashboardState } from "./dashboard.state";

export const FEATURE_KEY = 'dashboard';

export const selectFeature = createFeatureSelector<AppState, DashboardState>(FEATURE_KEY);

export const getTodos = createSelector(
    selectFeature,
    (state: DashboardState) => state.todos,
);

export const getLoading = createSelector(
    selectFeature,
    (state: DashboardState) => state.loading,
);

export const getError = createSelector(
    selectFeature,
    (state: DashboardState) => state.error,
);
