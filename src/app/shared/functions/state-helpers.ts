import { AsyncActionStatus } from "@app/ngrx/loading-state/loading.reducer";
import { Action, createAction } from "@ngrx/store";

export function createActionName(featureKey: string, name: string): string {
    return `[${featureKey}] ${name}`;
}

export function createEvent<P extends object>(featureName: string, name: string, originCommand?: Action, status: AsyncActionStatus = AsyncActionStatus.SUCCESS) {
    const actionName: string = createActionName(featureName, name);

    return createAction(actionName, (payload: P = Object.create({})) => ({ payload, commandType: originCommand?.type, status }));
}

export function createCommand<P extends object>(featureName: string, name: string) {
    const actionName: string = createActionName(featureName, name);

    return createAction(actionName, (payload: P = Object.create({})) => ({ payload, commandType: actionName, status: AsyncActionStatus.LOADING }));
}
