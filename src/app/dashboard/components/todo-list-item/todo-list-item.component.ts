import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

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

    @HostListener('click')
    public onClick(): void {
        throw new Error('Method not implemented.');
    }

    @Input()
    public todo!: ITodo;

    public constructor(
        public store: Store<AppState>,
    ) { }

    public ngOnInit(): void {
        this._doneClass = this.todo.isDone;
    }

    public async onCheckClick(event: Event): Promise<void> {
        event.stopPropagation();

        if(window.navigator.vibrate) window.navigator.vibrate(5);

        this.store.dispatch(dashboardActions.update({
            todo: {
                ...this.todo,
                isDone: !this.todo.isDone,
            }
        }));
    }
}
