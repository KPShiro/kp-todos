import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { utils } from '@app/core/domain/functions/utils';
import { ITodo } from '@app/core/domain/interfaces/todo.interface';

@Component({
    selector: 'app-todo-list-group-item',
    templateUrl: './todo-list-group-item.component.html',
    styleUrls: [ './todo-list-group-item.component.scss' ],
})
export class TodoListGroupItemComponent implements OnInit {

    @HostBinding('class.app-todo-list-group-item')
    private readonly _hostClass: boolean = true;

    @Input()
    public todo?: ITodo;

    @Input()
    @HostBinding('class.loading')
    public isLoading: boolean = false;

    @Input()
    @HostBinding('class.completed')
    public isCompleted: boolean = false;

    @Output()
    public checkboxClick: EventEmitter<boolean> = new EventEmitter();

    public ngOnInit(): void {
        this.isCompleted = this.todo?.isDone ?? false;
    }

    public onCheckboxClick(event: Event): void {
        if (!utils.isDefAndNotNull(this.todo)) {
            return;
        }

        event.stopPropagation();
        this.checkboxClick.emit(!this.todo?.isDone);
    }
}
