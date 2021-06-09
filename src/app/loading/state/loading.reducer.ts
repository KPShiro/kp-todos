import * as loadingActions from './loading.actions';

import { Action, createReducer, on } from "@ngrx/store";
import { initialState, LoadingState, loadingStateAdapter } from "./loading.state";

const _reducer = createReducer(
    initialState,
    on(loadingActions.addLoadingAction, (state, action) => loadingStateAdapter.addOne(action.payload, state)),
    on(loadingActions.removeLoadingAction, (state, action) => loadingStateAdapter.removeOne(action.payload, state)),
);

export function loadingReducer(state: LoadingState | undefined, action: Action) {
    return _reducer(state, action);
}
