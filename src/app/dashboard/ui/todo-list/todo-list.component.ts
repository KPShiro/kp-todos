import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {

    @Input()
    public todos: ITodo[] = [];

    @Output()
    public todoClicked: EventEmitter<ITodo> = new EventEmitter();

    @Output()
    public todoCheckboxClicked: EventEmitter<{ todo: ITodo, isDone: boolean }> = new EventEmitter();

    public onTodoItemCheckboxClick(todo: ITodo, isDone: boolean): void {
        this.todoCheckboxClicked.emit({ todo, isDone });
    }

    public onTodoItemClick(todo: ITodo): void {
        this.todoClicked.emit(todo);
    }

}
