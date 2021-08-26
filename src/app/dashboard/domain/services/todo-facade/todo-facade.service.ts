import * as loadingSelectors from '@app/ngrx/loading-state/loading-state-selectors';
import * as fromTodoState from '@app/ngrx/todo-state/todo-state-selectors';
import * as TodoActions from '@app/ngrx/todo-state/todo-state-actions';

import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Action, Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { map, pluck } from 'rxjs/operators';
import { utils } from '@app/shared/functions/utils';
import { AsyncActionStatus } from '@app/ngrx/loading-state/loading-state-utils';
import { AppState } from '@app/ngrx/app-state/app-state';
import { KeyValue } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class TodoFacade {

    public readonly todos$: Observable<ITodo[]> = this._store.select(fromTodoState.getTodos);

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

    public groupTodosByDate(todos: ITodo[]): KeyValue<string, ITodo[]>[] {
        const groupedTodos: KeyValue<string, ITodo[]>[] = [];
        const uniqueDates = new Set<string>();

        todos.forEach(x => uniqueDates.add(x.date));

        [ ...uniqueDates ].forEach(date => {
            groupedTodos.push({ key: date, value: todos.filter(t => t.date === date) });
        });

        return groupedTodos;
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
