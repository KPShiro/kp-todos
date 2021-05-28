import * as fromDashboard from '@app/dashboard/state/dashboard.selectors';
import * as dashboardAction from '@app/dashboard/state/dashboard.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/state/app.state';
import { Observable } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {
    public todos$: Observable<ITodo[]> = new Observable();
    public todosCount$: Observable<number> = new Observable();
    public doneTodosCount$: Observable<number> = new Observable();

    public constructor(
      private readonly _store: Store<AppState>,
    ) { }

    public ngOnInit(): void {
        this.todos$ = this._store.select(fromDashboard.selectTodos);
        this.todosCount$ = this.todos$.pipe(map(todos => todos.length));
        this.doneTodosCount$ = this.todos$.pipe(map(todos => todos.reduce<number>((sum, todo) => {
            if (todo.isDone) sum++;
            return sum;
        }, 0)))
    }

    public onAddTodoClick(): void {
        this._store.dispatch(dashboardAction.openTodoCreateForm());
    }
}
