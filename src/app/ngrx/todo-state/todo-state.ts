import { ITodo } from "@app/core/domain/interfaces/todo.interface";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export const TODO_STATE_KEY = 'todo';

export interface TodoState extends EntityState<ITodo> {
    selectedId?: string;
}

export const todoStateEntityAdapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
    selectId: (todo: ITodo) => todo.id,
});

export const initialTodoState: TodoState = todoStateEntityAdapter.getInitialState({ });
