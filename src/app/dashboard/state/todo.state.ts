import { ITodo } from '@app/shared/interfaces/todo.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface TodoState extends EntityState<ITodo> { }

export const adapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
    selectId: (todo: ITodo) => todo.id,
});

export const initialState: TodoState = adapter.getInitialState({ });
