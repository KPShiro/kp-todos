import * as dashboardEvents from './events';

import { Action, createReducer, on } from '@ngrx/store';
import { DashboardState, initialState, adapter } from './dashboard.state';

const _dashboardReducer = createReducer(
    initialState,
    on(dashboardEvents.fetchTodosSuccess, (state, { payload }) => adapter.setAll(payload.todos, state)),
    on(dashboardEvents.updateTodoSuccess, (state, { payload }) => adapter.updateOne(payload.update, state)),
    on(dashboardEvents.deleteTodoSuccess, (state, { payload }) => adapter.removeOne(payload.id, state)),
    on(dashboardEvents.createTodoSuccess, (state, { payload }) => adapter.addOne(payload.todo, state)),
);

export function dashboardReducer(state: DashboardState | undefined, action: Action) {
    return _dashboardReducer(state, action);
}
