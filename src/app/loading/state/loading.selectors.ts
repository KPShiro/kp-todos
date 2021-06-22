import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FEATURE_KEY, LoadingState, loadingStateAdapter } from "./loading.state";

const entitiySelectors = loadingStateAdapter.getSelectors();

const getFeature = createFeatureSelector<LoadingState>(FEATURE_KEY);

export const getActionsArray = createSelector(
    getFeature,
    entitiySelectors.selectAll,
);

export const getActionByType = (type: string) => createSelector(
    getActionsArray,
    (actions) => actions.find(action => action.commandType === type),
);
