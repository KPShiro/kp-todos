import * as dashboardCommands from '@app/dashboard/state/commands';
import * as dashboardState from '@app/dashboard/state/dashboard.selectors';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/state/app.state';

@Injectable({
    providedIn: 'root',
})
export class TodoFacade {

    public readonly todos$: Observable<ITodo[]> = this._store.select(dashboardState.getTodos);
    public readonly loading$: Observable<boolean> = this._store.select(dashboardState.getLoading);
    public readonly error$: Observable<any> = this._store.select(dashboardState.getError);

    public constructor(
        private readonly _store: Store<AppState>,
    ) { }

    public fetchTodos(): void {
        this._store.dispatch(dashboardCommands.fetchTodos());
    }

    public createTodo(text: string): void {
        this._store.dispatch(dashboardCommands.createTodo({ text }));
    }

    public deleteTodo(id: string): void {
        this._store.dispatch(dashboardCommands.deleteTodo({ id }));
    }

    public updateTodo(todo: ITodo): void {
        this._store.dispatch(dashboardCommands.updateTodo({ todo }));
    }

}
