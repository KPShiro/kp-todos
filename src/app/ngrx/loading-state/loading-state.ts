import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { AsyncAction } from "./loading-state-utils";

export const LOADING_STATE_KEY = 'loading';

export interface LoadingState extends EntityState<AsyncAction> { }

export const loadingStateAdapter: EntityAdapter<AsyncAction> = createEntityAdapter<AsyncAction>({
    selectId: (action: AsyncAction) => action.commandType,
});

export const initialLoadingState: LoadingState = loadingStateAdapter.getInitialState({ });
