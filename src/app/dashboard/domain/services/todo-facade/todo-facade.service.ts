import * as loadingSelectors from '@app/ngrx/loading-state/loading.selectors';
import * as fromTodoState from '@app/ngrx/todo-state/todo-state-selectors';
import * as TodoActions from '@app/ngrx/todo-state/todo-state-actions';

import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Action, Store } from '@ngrx/store';
import { AppState } from '@app/core/state/app.state';
import { Update } from '@ngrx/entity';
import { map, pluck, switchMap } from 'rxjs/operators';
import { AsyncActionStatus } from '@app/ngrx/loading-state/loading.reducer';
import { utils } from '@app/shared/functions/utils';

@Injectable({
    providedIn: 'root',
})
export class TodoFacade {

    public readonly todos$: Observable<ITodo[]> = this._store.select(fromTodoState.getTodos);

    public readonly selectedTodoId$: Observable<string | undefined> = this._store.select(fromTodoState.getSelectedTodoId);

    public readonly selectedTodo$: Observable<ITodo | undefined> = this.selectedTodoId$.pipe(
        switchMap((id) => utils.isDefAndNotNull(id) ? this._store.select(fromTodoState.getTodoById(id)) : of(undefined)),
    );

    public readonly isFetchTodosPending$: Observable<boolean> = this._isActionPending(TodoActions.fetchTodos);

    public constructor(
        private readonly _store: Store<AppState>,
    ) { }

    public fetchTodos(): void {
        this._store.dispatch(TodoActions.fetchTodos());
    }

    public createTodo(text: string): void {
        this._store.dispatch(TodoActions.createTodo({ text }));
    }

    public deleteTodo(id: string): void {
        this._store.dispatch(TodoActions.deleteTodo({ id }));
    }

    public updateTodo(update: Update<ITodo>): void {
        this._store.dispatch(TodoActions.updateTodo({ update }));
    }

    public selectTodo(id: string): void {
        this._store.dispatch(TodoActions.selectTodo({ id }));
    }

    public deselectTodo(): void {
        this._store.dispatch(TodoActions.deselectTodo());
    }

    private _isActionPending(action: Action): Observable<boolean> {
        if(!utils.isDefAndNotNull(action)) {
            return of(false);
        }

        return this._store.select(loadingSelectors.getActionByType(action.type)).pipe(
            map((action) => utils.isDefAndNotNull(action) ? action.status === AsyncActionStatus.PENDING : false),
        );
    }

    private _getActionError(action: Action): Observable<string | undefined> {
        return this._store.select(loadingSelectors.getActionByType(action.type)).pipe(
            pluck('payload', 'error'),
        );
    }

}
