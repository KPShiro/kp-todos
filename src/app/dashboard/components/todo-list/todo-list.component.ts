import * as todoCommands from '@app/dashboard/todo-state/commands';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { TodoFacade } from '@app/dashboard/services/todo.facade';
import { KpOverlayService } from '@app/kp-overlay/services/overlay.service';
import { TodoEditFormComponent } from '../todo-edit-form/todo-edit-form.component';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {

    public todos$: Observable<ITodo[]> = this._todoFacade.todos$;

    public fetchTodosPending$: Observable<boolean> = this._todoFacade.isActionPending$(todoCommands.fetchTodos);
    public fetchTodosError$: Observable<string | undefined> = this._todoFacade.getActionError$(todoCommands.fetchTodos);

    public constructor(
      private readonly _todoFacade: TodoFacade,
      private readonly _overlayService: KpOverlayService,
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

    public onTodoItemClick(todo: ITodo): void {
        this._todoFacade.selectTodo(todo.id);
        const overlayRef = this._overlayService.openBottomSheet(TodoEditFormComponent, todo);
        overlayRef.afterClosed$.subscribe(() => {
            this._todoFacade.deselectTodo();
        });
    }

}
