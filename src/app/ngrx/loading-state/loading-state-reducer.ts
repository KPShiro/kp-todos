import { initialLoadingState, LoadingState, loadingStateAdapter } from "./loading-state";
import { AsyncAction, AsyncActionStatus } from "./loading-state-utils";

export function loadingStateReducer(state: LoadingState = initialLoadingState, action: AsyncAction) {
    if (action.status === AsyncActionStatus.PENDING) {
        state = loadingStateAdapter.setOne(action, state);
    }

    if (action.status === AsyncActionStatus.SUCCESS) {
        state = loadingStateAdapter.removeOne(action.commandType, state);
    }

    if (action.status === AsyncActionStatus.ERROR) {
        const { commandType, ...change } = action;
        state = loadingStateAdapter.updateOne({
            id: action.commandType,
            changes: {
                ...change,
            },
        }, state);
    }

    return state;
}
