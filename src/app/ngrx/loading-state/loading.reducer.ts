import { Action } from "@ngrx/store";
import { initialLoadingState, LoadingState, loadingStateAdapter } from "./loading.state";

export enum AsyncActionStatus {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export interface AsyncAction extends Action {
    status: AsyncActionStatus;
    error: string | undefined;
    commandType: string;
}

export function loadingStateReducer(state: LoadingState = initialLoadingState, action: AsyncAction) {
    console.log(action.type);

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
