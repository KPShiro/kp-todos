import { createActionName } from "@app/shared/functions/state-helpers";
import { createAction, props } from "@ngrx/store";
import { FEATURE_KEY } from "./loading.state";

export const addLoadingAction = createAction(
    createActionName(`${FEATURE_KEY}`, 'Add'),
    props<{ payload: string }>(),
);

export const removeLoadingAction = createAction(
    createActionName(`${FEATURE_KEY}`, 'Remove'),
    props<{ payload: string }>(),
);
