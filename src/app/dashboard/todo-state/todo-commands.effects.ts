import * as uuid from 'uuid';
import * as todoCommands from '@app/dashboard/todo-state/commands';
import * as todoEvents from '@app/dashboard/todo-state/events';

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, debounceTime, distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { of } from 'rxjs';
import { VibrationService } from '@app/core/services/vibration/vibration.service';
import { TodoService } from '@app/core/services/todo/todo.service';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Injectable()
export class TodoCommandsEffects {

    fetchTodosCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(todoCommands.fetchTodos),
        debounceTime(500),
        switchMap(() => this._todoService.getTodos().pipe(
            map((todos) => todoEvents.fetchTodosSuccess({ todos })),
            catchError((error) => of(todoEvents.fetchTodosError({ error: error.message }))),
        )),
    ));

    updateTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(todoCommands.updateTodo),
        map((action) => action.payload),
        map((payload) => todoEvents.updateTodoSuccess(payload)),
        tap(() => this._vibrationService.vibrate(5)),
        catchError((error) => of(todoEvents.updateTodoError({ error }))),
    ));

    deleteTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(todoCommands.deleteTodo),
        map((action) => action.payload),
        distinctUntilChanged((prev, curr) => prev.id === curr.id),
        map((payload) => todoEvents.deleteTodoSuccess({ id: payload.id })),
        catchError((error) => of(todoEvents.deleteTodoError({ error }))),
    ));

    createTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(todoCommands.createTodo),
        map((action) => action.payload),
        map((payload) => ({
            id: uuid.v4(),
            text: payload.text,
        } as ITodo)),
        map((todo) => todoEvents.createTodoSuccess({ todo })),
        catchError((error) => of(todoEvents.createTodoError({ error }))),
    ));

    public constructor(
        private readonly _actions$: Actions,
        private readonly _vibrationService: VibrationService,
        private readonly _todoService: TodoService,
    ) { }

}
