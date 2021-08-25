import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoFacade } from '@app/dashboard/domain/services/todo-facade/todo-facade.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { KeyValue } from '@angular/common';

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

    public isFetchTodosPending$: Observable<boolean> = this._todoFacade.isFetchTodosPending$;

    public todosGroupedByDate$: Observable<KeyValue<string, ITodo[]>[]> = combineLatest([
        this._todoFacade.todosGroupedByDate$,
        this.isFetchTodosPending$,
    ]).pipe(
        map(([ groupedTodos, isFetchingTodos ]) => isFetchingTodos ? new Array(2).fill({
            key: new Date().toISOString(),
            value: new Array(3).fill(null),
        }) : groupedTodos),
    );

    public constructor(
        private readonly _todoFacade: TodoFacade,
    ) { }

    public ngOnInit(): void {
        this._todoFacade.fetchTodos();
        this._todoFacade.todosGroupedByDate$.subscribe();
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
