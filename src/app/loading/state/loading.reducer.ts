import { Action } from "@ngrx/store";
import { initialState, LoadingState, loadingStateAdapter } from "./loading.state";

interface AsyncAction extends Action {
    loading: boolean;
    commandType: string;
}

export function loadingReducer(state: LoadingState = initialState, action: AsyncAction) {

    if (action.loading === true) {
        state = loadingStateAdapter.addOne(action.commandType, state);
    }

    if (action.loading === false) {
        state = loadingStateAdapter.removeOne(action.commandType, state);
    }

    return state;

}
