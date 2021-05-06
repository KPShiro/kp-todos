import * as dashboardActions from './dashboard.actions';

import { Action, createReducer, on } from "@ngrx/store";
import { DashboardState, FEATURE_INITIAL_STATE } from "./dashboard.state";

const reducer = createReducer(
    FEATURE_INITIAL_STATE,
    on(dashboardActions.create, (state, { text }) => ({ ...state, todos: [ ...state.todos, text ] }))
);

export function featureReducer(state: DashboardState | undefined, action: Action) {
    return reducer(state, action);
}
