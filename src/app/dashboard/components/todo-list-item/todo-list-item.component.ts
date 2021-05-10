import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AppState } from '@app/core/state/app.state';
import { Store } from '@ngrx/store';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: [ './todo-list-item.component.scss' ],
})
export class TodoListItemComponent implements OnInit {
    @HostBinding('class.app-todo-list-item')
    private _addHostClass: boolean = true;

    @HostBinding('class.done')
    private _doneClass: boolean = false;

    @Input()
    public todo!: ITodo;

    public constructor(
        public store: Store<AppState>,
    ) { }

    public ngOnInit(): void {
        this._doneClass = this.todo.isDone;
    }

    public onCheckClick(): void {
        this.store.dispatch(dashboardActions.update({
            todo: {
                ...this.todo,
                isDone: !this.todo.isDone,
            }
        }));
    }
}
