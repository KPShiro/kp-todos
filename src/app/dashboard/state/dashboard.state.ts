import { ITodo } from '@app/shared/interfaces/todo.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface DashboardState extends EntityState<ITodo> {
  loading: boolean;
  error: Error | null;
}

export const adapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
    selectId: (todo: ITodo) => todo.id,
    sortComparer: (a: ITodo, b: ITodo) => a.text.localeCompare(b.text),
});

export const initialState: DashboardState = adapter.getInitialState({
    loading: false,
    error: null,
});
