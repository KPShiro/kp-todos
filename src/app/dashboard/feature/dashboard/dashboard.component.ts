import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { listAnimation } from '@app/shared/util/animations';
import { TodoFacade } from '@app/dashboard/domain/services/todo-facade/todo-facade.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ],
    animations: [ listAnimation() ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

    public isFetchTodosPending$: Observable<boolean> = this._todoFacade.isFetchTodosPending$;

    public todos$: Observable<ITodo[]> = this.isFetchTodosPending$.pipe(
        switchMap((isFetchingTodos) => isFetchingTodos ? of(new Array(5).fill(null)) : this._todoFacade.todos$),
    );

    public constructor(
        private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        this._todoFacade.fetchTodos();
    }

    public test(): void {
        this._todoFacade.fetchTodos();
    }

    public onTodoClick(todo: ITodo, isDisabled: boolean | null = false): void {
        if (isDisabled) {
            return;
        }

        throw new Error('Not implemented');
    }

    public onTodoCheckboxClick(todo: ITodo, isDone: boolean, isDisabled: boolean | null = false): void {
        if (isDisabled) {
            return;
        }

        this._todoFacade.updateTodo({
            id: todo.id,
            changes: { isDone },
        });
    }

}
