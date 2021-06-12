import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export const FEATURE_KEY = 'loading';

export interface LoadingState extends EntityState<string> { }

export const loadingStateAdapter: EntityAdapter<string> = createEntityAdapter<string>({
    selectId: (action: string) => action,
});

export const initialState: LoadingState = loadingStateAdapter.getInitialState({ });