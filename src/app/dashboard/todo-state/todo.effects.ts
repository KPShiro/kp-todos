import * as uuid from 'uuid';
import * as todoCommands from '@app/dashboard/todo-state/commands';
import * as todoEvents from '@app/dashboard/todo-state/events';

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { of } from 'rxjs';
import { KpDialogService } from '@app/kp-dialog/services/kp-dialog/kp-dialog.service';
import { KpDialogType } from '@app/kp-dialog/enums/dialog-type.enum';
import { TodoCreateFormComponent } from '@app/dashboard/components/todo-create-form/todo-create-form.component';
import { TodoEditFormComponent } from '@app/dashboard/components/todo-edit-form/todo-edit-form.component';
import { VibrationService } from '@app/core/services/vibration/vibration.service';
import { TodoService } from '@app/core/services/todo/todo.service';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Injectable()
export class TodoEffects {

    fetchTodosCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(todoCommands.fetchTodos),
        switchMap(() => this._todoService.getTodos().pipe(
            map((todos) => todoEvents.fetchTodosSuccess({ todos })),
            catchError((error) => of(todoEvents.fetchTodosError({ error: error.message }))),
        )),
    ));

    openTodoFormCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(todoCommands.openTodoForm),
        map((action) => action.payload),
        tap((payload) => {
            if (payload === undefined || payload === null) {
                this._dialogService.open(TodoCreateFormComponent, {
                    type: KpDialogType.BOTTOMSHEET,
                });
            } else {
                this._dialogService.open(TodoEditFormComponent, {
                    type: KpDialogType.BOTTOMSHEET,
                    data: payload.todo,
                });
            }
        }),
        tap(() => this._vibrationService.vibrate(5)),
    ), { dispatch: false });

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
        private readonly _dialogService: KpDialogService,
        private readonly _vibrationService: VibrationService,
        private readonly _todoService: TodoService,
    ) { }

}
