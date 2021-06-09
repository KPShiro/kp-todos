import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_KEY, LoadingState, loadingStateAdapter } from "./loading.state";

const entitiySelectors = loadingStateAdapter.getSelectors();

const getFeature = createFeatureSelector<LoadingState>(FEATURE_KEY);

export const getActionsArray = createSelector(
    getFeature,
    entitiySelectors.selectAll,
);

export const getActionsMap = createSelector(
    getActionsArray,
    (array) => array.reduce((p, n) => {
        p.set(n, true);
        return p;
    }, new Map()),
);

export const getActionByType = (type: string) => createSelector(
    getActionsMap,
    (map) => map.get(type),
);
