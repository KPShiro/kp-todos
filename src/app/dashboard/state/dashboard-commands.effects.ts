import * as uuid from 'uuid';
import * as dashboardCommands from '@app/dashboard/state/commands';
import * as dashboardEvents from '@app/dashboard/state/events';

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, switchMap, tap } from "rxjs/operators";
import { of } from 'rxjs';
import { KpDialogService } from '@app/kp-dialog/services/kp-dialog/kp-dialog.service';
import { KpDialogType } from '@app/kp-dialog/enums/dialog-type.enum';
import { TodoCreateFormComponent } from '@app/dashboard/components/todo-create-form/todo-create-form.component';
import { TodoEditFormComponent } from '@app/dashboard/components/todo-edit-form/todo-edit-form.component';
import { VibrationService } from '@app/core/services/vibration/vibration.service';
import { TodoService } from '@app/core/services/todo/todo.service';
import { ITodo } from '@app/shared/interfaces/todo.interface';

@Injectable()
export class DashboardCommandsEffects {

    fetchTodosCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardCommands.fetchTodos),
        switchMap(() => this._todoService.getTodos().pipe(
            map((todos) => dashboardEvents.fetchTodosSuccess({ todos })),
            catchError((error) => of(dashboardEvents.fetchTodosError({ error: error.message }))),
        )),
    ));

    openTodoFormCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardCommands.openTodoForm),
        map((action) => action.payload),
        tap((payload) => {
            if(payload === undefined || payload === null) {
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
        ofType(dashboardCommands.updateTodo),
        map((action) => action.payload),
        delay(500),
        map((payload) => dashboardEvents.updateTodoSuccess(payload)),
        tap(() => this._vibrationService.vibrate(5)),
        catchError((error) => of(dashboardEvents.updateTodoError({ error }))),
    ));

    deleteTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardCommands.deleteTodo),
        map((action) => action.payload),
        delay(500),
        map((payload) => dashboardEvents.deleteTodoSuccess({ id: payload.id })),
        catchError((error) => of(dashboardEvents.deleteTodoError({ error }))),
    ));

    createTodoCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardCommands.createTodo),
        map((action) => action.payload),
        delay(500),
        map((payload) => ({
            id: uuid.v4(),
            text: payload.text,
        } as ITodo)),
        map((todo) => dashboardEvents.createTodoSuccess({ todo })),
        catchError((error) => of(dashboardEvents.createTodoError({ error }))),
    ));

    public constructor(
        private readonly _actions$: Actions,
        private readonly _dialogService: KpDialogService,
        private readonly _vibrationService: VibrationService,
        private readonly _todoService: TodoService,
    ) {}

}
