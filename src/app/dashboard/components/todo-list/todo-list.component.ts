import * as fromDashboard from '@app/dashboard/state/selectors';
import * as dashboardCommands from '@app/dashboard/state/commands';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/state/app.state';
import { Observable } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { FetchTodosCommand } from '@app/dashboard/facades/fetch-todos.facade';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {
    public todos$: Observable<ITodo[]> = new Observable();

    public constructor(
      private readonly _store: Store<AppState>,
      public readonly fetchTodosCommand: FetchTodosCommand,
    ) { }

    public ngOnInit(): void {
        this.todos$ = this._store.select(fromDashboard.selectTodos);
        this.onFetchTodosClick();
    }

    public onAddTodoClick(): void {
        this._store.dispatch(dashboardCommands.openTodoFormCommand());
    }

    public onFetchTodosClick(): void {
        this._store.dispatch(dashboardCommands.fetchTodosCommand());
    }
}
