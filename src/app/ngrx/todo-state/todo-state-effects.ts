import * as uuid from 'uuid';
import * as TodoActions from './todo-state-actions';

import { Injectable } from "@angular/core";
import { TodoService } from "@app/core/domain/services/todo/todo.service";
import { VibrationService } from "@app/core/domain/services/vibration/vibration.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { ITodo } from '@app/core/domain/interfaces/todo.interface';

@Injectable()
export class TodoStateEffects {

    fetchTodosCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(TodoActions.fetchTodos),
        debounceTime(500),
        switchMap(() => this._todoService.getTodos().pipe(
            map((todos) => TodoActions.fetchTodosSuccess({ todos })),
            catchError((error) => of(TodoActions.fetchTodosError({ error: error.message }))),
        )),
    ));

    updateTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(TodoActions.updateTodo),
        map((action) => action.payload),
        map((payload) => TodoActions.updateTodoSuccess(payload)),
        tap(() => this._vibrationService.vibrate(5)),
        catchError((error) => of(TodoActions.updateTodoError({ error }))),
    ));

    deleteTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(TodoActions.deleteTodo),
        map((action) => action.payload),
        distinctUntilChanged((prev, curr) => prev.id === curr.id),
        map((payload) => TodoActions.deleteTodoSuccess({ id: payload.id })),
        catchError((error) => of(TodoActions.deleteTodoError({ error }))),
    ));

    createTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(TodoActions.createTodo),
        map((action) => action.payload),
        map((payload) => ({
            id: uuid.v4(),
            text: payload.text,
        } as ITodo)),
        map((todo) => TodoActions.createTodoSuccess({ todo })),
        catchError((error) => of(TodoActions.createTodoError({ error }))),
    ));

    public constructor(
        private readonly _actions$: Actions,
        private readonly _vibrationService: VibrationService,
        private readonly _todoService: TodoService,
    ) { }

}
