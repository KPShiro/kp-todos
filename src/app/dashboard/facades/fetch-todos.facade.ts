import * as dashboardCommands from '@app/dashboard/state/commands';
import * as dashboardEvents from '@app/dashboard/state/events';

import { Injectable } from "@angular/core";
import { AppState } from "@app/core/state/app.state";
import { Store } from "@ngrx/store";
import { Actions, ofType } from '@ngrx/effects';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FetchTodosCommand {

    public pending$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public constructor(
        private readonly _store: Store<AppState>,
        private readonly _actions$: Actions,
    ) { }

    public execute(): void {
        this.pending$.next(true);

        this._store.dispatch(dashboardCommands.fetchTodosCommand());

        // [ WARNING, subscribe() call! ] This is not recommended, but leaving it for now as a temporary solution
        this._actions$.pipe(
            ofType(dashboardEvents.fetchTodosSuccessEvent)
        ).subscribe(() => {
            this.pending$.next(false);
        });
    }

}
