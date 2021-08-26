import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoFacade } from '@app/dashboard/domain/services/todo-facade/todo-facade.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { KeyValue } from '@angular/common';
import { utils } from '@app/shared/functions/utils';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ],
    animations: [
        trigger('todoGroupAnimation', [
            transition('* => *', [
                query(':enter', [
                    style({
                        transform: 'translateX(-20%)',
                        opacity: 0,
                    }),
                    stagger(200, [
                        animate('0.5s', style({
                            transform: 'translateX(0)',
                            opacity: 1,
                        })),
                    ]),
                ], { optional: true })
            ])
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

    private completedTasksPageTitle: string = 'Completed Todos';
    private inProgressTasksPageTitle: string = 'My Todos';

    private _showOnlyCompletedTodosSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.inProgressTasksPageTitle);

    public showOnlyCompletedTodos$: Observable<boolean> = this._showOnlyCompletedTodosSubject.asObservable();
    public pageTitle$: Observable<string> = this._pageTitleSubject.asObservable();

    public isFetchTodosPending$: Observable<boolean> = this._todoFacade.isFetchTodosPending$;

    public todos$: Observable<KeyValue<string, ITodo[]>[]> = combineLatest([
        this._todoFacade.todos$,
        this._showOnlyCompletedTodosSubject.asObservable(),
        this.isFetchTodosPending$,
    ]).pipe(
        map(([ todos, showOnlyCompleted, isPending ]) => isPending ? undefined : todos.filter(x => x.isDone === showOnlyCompleted)),
        map(todos => utils.isDefAndNotNull(todos) ? this._todoFacade.groupTodosByDate(todos) : new Array(3).fill({
            key: new Date().toISOString(),
            value: new Array(2).fill(null),
        })),
    );

    public constructor(
        private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        this._todoFacade.fetchTodos();
    }

    public toggleProgressedTodos(): void {
        if(this._showOnlyCompletedTodosSubject.value) {
            this._showOnlyCompletedTodosSubject.next(false);
            this._pageTitleSubject.next(this.inProgressTasksPageTitle);
        } else {
            this._showOnlyCompletedTodosSubject.next(true);
            this._pageTitleSubject.next(this.completedTasksPageTitle);
        }
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
