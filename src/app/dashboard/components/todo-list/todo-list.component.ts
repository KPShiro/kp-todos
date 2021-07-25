import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { TodoFacade } from '@app/dashboard/services/todo.facade';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent {

    public todos$: Observable<ITodo[]> = this._todoFacade.todos$;
    public isFetchTodosPending$: Observable<boolean> = this._todoFacade.isFetchTodosPending$;

    public constructor(
      private readonly _todoFacade: TodoFacade,
    ) { }

    public onFetchTodosClick(): void {
        this._todoFacade.fetchTodos();
    }

    public onTodoItemCheckboxClick(todo: ITodo, isDone: boolean): void {
        this._todoFacade.updateTodo({
            id: todo.id,
            changes: { isDone }
        });
    }

    public onTodoItemClick(todo: ITodo): void {
        // TODO: Open EditTodo dialog
        throw new Error('Not implemented');
    }

}
