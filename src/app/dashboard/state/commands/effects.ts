import * as dashboardCommands from '@app/dashboard/state/commands';
import * as dashboardEvents from '@app/dashboard/state/events';

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable()
export class DashboardCommandsEffects {

    fetchTodosCommandEffect$ = createEffect(() => this._actions$.pipe(
        ofType(dashboardCommands.fetchTodosCommand),
        delay(1000),
        map(() => [
            {
                id: '1',
                isDone: false,
                text: 'Clean the code',
                children: [
                    {
                        id: '6',
                        isDone: false,
                        text: 'Clean FE code',
                        children: [],
                    },
                    {
                        id: '7',
                        isDone: false,
                        text: 'Clean BE code',
                        children: [],
                    },
                ],
            },
            {
                id: '2',
                isDone: false,
                text: 'Update documentation',
                children: [],
            },
            {
                id: '3',
                isDone: false,
                text: 'Send updates',
                children: [],
            },
            {
                id: '4',
                isDone: true,
                text: 'Prepare release notes',
                children: [],
            },
            {
                id: '5',
                isDone: false,
                text: 'Create production PullRequest',
                children: [],
            }
        ]),
        map((todos) => dashboardEvents.fetchTodosSuccessEvent({ todos })),
        catchError((error) => of(dashboardEvents.fetchTodosErrorEvent({ error }))),
    ));

    public constructor(
        private readonly _actions$: Actions,
    ) {}

}
