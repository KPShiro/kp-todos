import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Observable } from 'rxjs';
import { TodoFacade } from '@app/dashboard/domain/services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

    public todos$: Observable<ITodo[]> = this._todoFacade.todos$;
    public isFetchTodosPending$: Observable<boolean> = this._todoFacade.isFetchTodosPending$;

    public constructor(
        private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        this._todoFacade.fetchTodos();
    }

    public onTodoClick(todo: ITodo): void {
        throw new Error('Not implemented');
    }

    public onTodoCheckboxClick(data: { todo: ITodo, isDone: boolean }): void {
        this._todoFacade.updateTodo({
            id: data.todo.id,
            changes: { isDone: data.isDone },
        });
    }

}
