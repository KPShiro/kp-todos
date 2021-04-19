import * as actions from './state/todo-list.actions';
import * as fromTodosList from './state/todo-list.selectors';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './app-todo-list.component.html',
    styleUrls: [ './app-todo-list.component.scss' ]
})
export class AppTodoListComponent implements OnInit {
    public todos$: Observable<any[]> = new Observable();

    public constructor(
      private readonly _store: Store,
    ) {}

    public ngOnInit(): void {
        this.todos$ = this._store.select(fromTodosList.selectAllTodos);
    }

    public addTodo(): void {
        this._store.dispatch(actions.create({ text: 'Lorem ipsum' }));
    }
}
