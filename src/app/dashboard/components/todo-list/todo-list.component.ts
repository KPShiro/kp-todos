import * as dashboardActions from '@app/dashboard/state/dashboard.actions';
import * as dashboardSelectors from '@app/dashboard/state/dashboard.selectors';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/state/app.state';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {
    public todos$: Observable<any[]> = new Observable();

    public constructor(
      private readonly _store: Store<AppState>,
    ) {}

    public ngOnInit(): void {
        this.todos$ = this._store.select(dashboardSelectors.selectAllTodos);
    }

    public addTodo(): void {
        this._store.dispatch(dashboardActions.create({ text: 'Lorem ipsum' }));
    }
}