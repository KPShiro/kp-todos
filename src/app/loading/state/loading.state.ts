import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { AsyncAction } from "./loading.reducer";

export const FEATURE_KEY = 'loading';

export interface LoadingState extends EntityState<AsyncAction> { }

export const loadingStateAdapter: EntityAdapter<AsyncAction> = createEntityAdapter<AsyncAction>({
    selectId: (action: AsyncAction) => action.commandType,
});

export const initialState: LoadingState = loadingStateAdapter.getInitialState({ });
