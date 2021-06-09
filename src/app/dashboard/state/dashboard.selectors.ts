import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/state/app.state";
import { DashboardState, adapter } from "./dashboard.state";

const entitiySelectors = adapter.getSelectors();

export const FEATURE_KEY = 'dashboard';

export const selectFeature = createFeatureSelector<AppState, DashboardState>(FEATURE_KEY);

export const getTodos = createSelector(
    selectFeature,
    entitiySelectors.selectAll,
);

export const getLoading = createSelector(
    selectFeature,
    (state: DashboardState) => state.loading,
);

export const getError = createSelector(
    selectFeature,
    (state: DashboardState) => state.error,
);
