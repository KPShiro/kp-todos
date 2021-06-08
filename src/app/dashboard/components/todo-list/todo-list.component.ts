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
    public loading$: Observable<boolean> = this._todoFacade.loading$;

    public constructor(
      private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        this._todoFacade.fetchTodos();
    }

    public onAddTodoClick(): void {
        // this._store.dispatch(dashboardCommands.openTodoForm());
    }

    public onFetchTodosClick(): void {
        this._todoFacade.fetchTodos();
    }
}
