import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap } from "rxjs/operators";
import { KpDialogService } from '@app/kp-dialog/services/kp-dialog/kp-dialog.service';
import { TodoFormComponent } from '../components/todo-form/todo-form.component';
import { KpDialogType } from '@app/kp-dialog/enums/dialog-type.enum';
import { VibrationService } from '@app/core/services/vibration.service';
import { IKpDialogConfig } from '@app/kp-dialog/interfaces/dialog-configuration.interface';

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

    openTodoForm$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardActions.openTodoForm),
        map((action) => action.todo),
        tap((todo) => {
            let dialogConfig: IKpDialogConfig = {
                type: KpDialogType.BOTTOMSHEET,
            };

            if(todo) {
                dialogConfig = {
                    ...dialogConfig,
                    data: todo,
                };
            }

            this._dialogService.open(TodoFormComponent, dialogConfig);
            this._vibrationService.vibrate(5);
        }),
    ), { dispatch: false });

    public constructor(
        private readonly _actions$: Actions,
        private readonly _dialogService: KpDialogService,
        private readonly _vibrationService: VibrationService,
    ) {}
}
