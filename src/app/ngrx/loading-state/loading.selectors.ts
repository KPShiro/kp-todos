import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LOADING_STATE_KEY, LoadingState, loadingStateAdapter } from "./loading.state";

const entitiySelectors = loadingStateAdapter.getSelectors();

const getFeature = createFeatureSelector<LoadingState>(LOADING_STATE_KEY);

export const getActionsArray = createSelector(
    getFeature,
    entitiySelectors.selectAll,
);

export const getActionByType = (type: string) => createSelector(
    getActionsArray,
    (actions) => actions.find(action => action.commandType === type),
);
