import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { utils } from '@app/shared/functions/utils';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: [ './todo-list-item.component.scss' ],
})
export class TodoListItemComponent implements OnInit {

    @HostBinding('class.app-todo-list-item')
    private _addHostClass: boolean = true;

    @HostBinding('class.user-select-none')
    private _disableUserSelect: boolean = true;

    @HostBinding('class.done')
    private _doneClass: boolean = false;

    @Output()
    public checkboxClick: EventEmitter<boolean> = new EventEmitter();

    @Input()
    public todo!: ITodo;

    public ngOnInit(): void {
        if(!utils.isDefAndNotNull(this.todo)) {
            throw Error('Please provide Todo item!');
        }

        this._doneClass = this.todo.isDone ?? false;
    }

    public onCheckClick(event: Event): void {
        event.stopPropagation();
        this.checkboxClick.emit(!this.todo.isDone);
    }
}
