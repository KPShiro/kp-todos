import * as dashboardCommands from '@app/dashboard/state/commands';

import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
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
    public todo?: ITodo;

    public constructor(
        private readonly _store: Store<AppState>,
    ) { }

    public ngOnInit(): void {
        this._doneClass = this.todo?.isDone ?? false;
    }

    @HostListener('click')
    public onItemClick(): void {
        if(!this.todo) return;
        this._store.dispatch(dashboardCommands.openTodoForm({ todo: this.todo }));
    }

    public onCheckClick(event: Event): void {
        if(!this.todo) return;
        event.stopPropagation();
        this._store.dispatch(dashboardCommands.updateTodo({
            update: {
                id: this.todo.id,
                changes: { isDone: !this.todo.isDone, },
            },
        }));
    }
}
