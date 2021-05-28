import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs/operators";
import { KpDialogService } from '@app/kp-dialog/services/kp-dialog/kp-dialog.service';
import { KpDialogType } from '@app/kp-dialog/enums/dialog-type.enum';
import { VibrationService } from '@app/core/services/vibration.service';
import { IKpDialogConfig } from '@app/kp-dialog/interfaces/dialog-configuration.interface';
import { TodoEditFormComponent } from '../components/todo-edit-form/todo-edit-form.component';
import { TodoCreateFormComponent } from '../components/todo-create-form/todo-create-form.component';

@Injectable()
export class DashboardEffects {

    toggleTodoIsDone$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardActions.toggleTodoIsDone),
        map((action) => action.todo),
        map((todo) => dashboardActions.update({
            todo: {
                ...todo,
                isDone: !todo.isDone,
            },
        })),
    ));

    updateTodo$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardActions.update),
        tap(() => this._vibrationService.vibrate(5)),
    ), { dispatch: false });

    removeTodo$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardActions.remove),
        tap(() => this._vibrationService.vibrate(25)),
    ), { dispatch: false });

    openTodoCreateForm$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardActions.openTodoCreateForm),
        tap((action) => {
            let dialogConfig: IKpDialogConfig = {
                type: KpDialogType.BOTTOMSHEET,
            };

            this._dialogService.open(TodoCreateFormComponent, dialogConfig);
            this._vibrationService.vibrate(5);
        }),
    ), { dispatch: false });

    openTodoEditForm$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardActions.openTodoEditForm),
        tap((action) => {
            let dialogConfig: IKpDialogConfig = {
                type: KpDialogType.BOTTOMSHEET,
            };

            if(action.data) {
                dialogConfig = {
                    ...dialogConfig,
                    data: action.data,
                };
            }

            this._dialogService.open(TodoEditFormComponent, dialogConfig);
            this._vibrationService.vibrate(5);
        }),
    ), { dispatch: false });

    public constructor(
        private readonly _actions$: Actions,
        private readonly _dialogService: KpDialogService,
        private readonly _vibrationService: VibrationService,
    ) {}
}
