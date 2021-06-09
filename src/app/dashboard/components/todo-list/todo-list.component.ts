import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { TodoFacade } from '@app/dashboard/todo.facade';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {

    public todos$: Observable<ITodo[]> = this._todoFacade.todos$;

    public constructor(
      private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        this._todoFacade.fetchTodos();
    }

    public onFetchTodosClick(): void {
        this._todoFacade.fetchTodos();
    }

    public onTodoItemCheckboxClick(todo: ITodo, isDone: boolean): void {
        this._todoFacade.updateTodo({
            id: todo.id,
            changes: { isDone }
        });
    }

}
