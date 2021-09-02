import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ITodo } from '@app/core/domain/interfaces/todo.interface';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoFacade } from '@app/dashboard/domain/services/todo-facade/todo-facade.service';
import { ITodoListGroup } from '@app/dashboard/domain/interfaces/todo-list-group.interface';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

    private completedTasksPageTitle: string = 'Completed Todos';
    private inProgressTasksPageTitle: string = 'My Todos';

    private _showCompletedTodosSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.inProgressTasksPageTitle);

    public showCompletedTodos$: Observable<boolean> = this._showCompletedTodosSubject.asObservable();
    public pageTitle$: Observable<string> = this._pageTitleSubject.asObservable();

    public isFetchTodosPending$: Observable<boolean> = this._todoFacade.isFetchTodosPending$;

    public fakeTodoGroups$: Observable<ITodoListGroup[]> = this.isFetchTodosPending$.pipe(
        map(isFetchTodosPending => isFetchTodosPending ? new Array(3).fill({
            date: new Date(1900, 1, 1).toISOString(),
            todos: new Array(2).fill(undefined),
        } as ITodoListGroup) : []),
    );

    public todoGroups$: Observable<ITodoListGroup[]> = combineLatest([
        this._todoFacade.todos$,
        this.isFetchTodosPending$,
        this.showCompletedTodos$,
    ]).pipe(
        map(([ todos, isFetchTodosPending, showCompleted ]) => {
            const groupedTodos: any[] = this._todoFacade.groupTodosByDate(
                todos.filter(todo => todo.isDone === showCompleted)
            );

            return isFetchTodosPending ? new Array(3).fill({
                date: new Date(1900, 1, 1).toISOString(),
                todos: new Array(3).fill(undefined),
            } as ITodoListGroup) : groupedTodos;
        }),
    );

    public constructor(
        private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        this._todoFacade.fetchTodos();
    }

    public toggleProgressedTodos(): void {
        if(this._showCompletedTodosSubject.value) {
            this._showCompletedTodosSubject.next(false);
            this._pageTitleSubject.next(this.inProgressTasksPageTitle);
        } else {
            this._showCompletedTodosSubject.next(true);
            this._pageTitleSubject.next(this.completedTasksPageTitle);
        }
    }

    public onTodoClick(todo: ITodo): void {
        throw new Error('Not implemented');
    }

    public onTodoToggle(todo: ITodo): void {
        this._todoFacade.updateTodo({
            id: todo.id,
            changes: { isDone: !todo.isDone },
        });
    }

}
