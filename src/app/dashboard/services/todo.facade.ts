import * as loadingSelectors from '@app/loading/state/loading.selectors';
import * as todoSelectors from '@app/dashboard/todo-state/todo.selectors';
import * as todoCommands from '@app/dashboard/todo-state/commands';

import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Action, Store } from '@ngrx/store';
import { AppState } from '@app/core/state/app.state';
import { Update } from '@ngrx/entity';
import { map, pluck, switchMap } from 'rxjs/operators';
import { AsyncActionStatus } from '@app/loading/state/loading.reducer';
import { utils } from '@app/shared/functions/utils';

@Injectable({
    providedIn: 'root',
})
export class TodoFacade {

    public readonly todos$: Observable<ITodo[]> = this._store.select(todoSelectors.getTodos);

    public readonly selectedTodoId$: Observable<string | undefined> = this._store.select(todoSelectors.getSelectedTodoId);

    public readonly selectedTodo$: Observable<ITodo | undefined> = this.selectedTodoId$.pipe(
        switchMap((id) => utils.isDefAndNotNull(id) ? this._store.select(todoSelectors.getTodoById(id)) : of(undefined)),
    );

    public constructor(
        private readonly _store: Store<AppState>,
    ) { }

    public fetchTodos(): void {
        this._store.dispatch(todoCommands.fetchTodos());
    }

    public createTodo(text: string): void {
        this._store.dispatch(todoCommands.createTodo({ text }));
    }

    public deleteTodo(id: string): void {
        this._store.dispatch(todoCommands.deleteTodo({ id }));
    }

    public updateTodo(update: Update<ITodo>): void {
        this._store.dispatch(todoCommands.updateTodo({ update }));
    }

    public selectTodo(id: string): void {
        this._store.dispatch(todoCommands.selectTodo({ id }));
    }

    public deselectTodo(): void {
        this._store.dispatch(todoCommands.deselectTodo());
    }

    public isActionPending$(action: Action): Observable<boolean> {
        if(!utils.isDefAndNotNull(action)) {
            return of(false);
        }

        return this._store.select(loadingSelectors.getActionByType(action.type)).pipe(
            map((action) => utils.isDefAndNotNull(action) ? action.status === AsyncActionStatus.LOADING : false),
        );
    }

    public getActionError$(action: Action): Observable<string | undefined> {
        return this._store.select(loadingSelectors.getActionByType(action.type)).pipe(
            pluck('payload', 'error'),
        );
    }

}
