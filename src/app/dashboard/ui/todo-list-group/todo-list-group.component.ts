import { Component, ChangeDetectionStrategy, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { ITodo } from '@app/core/domain/interfaces/todo.interface';

@Component({
    selector: 'app-todo-list-group',
    templateUrl: './todo-list-group.component.html',
    styleUrls: [ './todo-list-group.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListGroupComponent {

    @HostBinding('class.app-todo-list-group')
    private readonly _hostClass: boolean = true;

    @Input()
    public data?: any;

    @Input()
    @HostBinding('class.loading')
    public isLoading: boolean = false;

    @Output()
    public todoToggle: EventEmitter<ITodo> = new EventEmitter<ITodo>();

    @Output()
    public todoClick: EventEmitter<ITodo> = new EventEmitter<ITodo>();

}
