import * as loadingActions from './loading.actions';

import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { filter, map } from "rxjs/operators";
import { FEATURE_ACTION_KEY } from './loading.state';

@Injectable()
export class LoadingEffects {

    addLoadingActions$ = createEffect(() => this._actions$.pipe(
        filter((action: any) => action[FEATURE_ACTION_KEY]),
        filter((action: any) => action[FEATURE_ACTION_KEY]['add']),
        map((action) => loadingActions.addLoadingAction({ payload: action[FEATURE_ACTION_KEY]['add'] }))
    ));

    removeLoadingActions$ = createEffect(() => this._actions$.pipe(
        filter((action: any) => action[FEATURE_ACTION_KEY]),
        filter((action: any) => action[FEATURE_ACTION_KEY]['remove']),
        map((action) => loadingActions.removeLoadingAction({ payload: action[FEATURE_ACTION_KEY]['remove'] }))
    ));

    public constructor(
        private readonly _actions$: Actions,
    ) { }

}
