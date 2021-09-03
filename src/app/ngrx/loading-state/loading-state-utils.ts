import { Action, createAction } from "@ngrx/store";

export enum AsyncActionStatus {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export interface AsyncAction extends Action {
    status: AsyncActionStatus;
    error: string | undefined;
    commandType: string;
}

export function createActionName(featureKey: string, name: string): string {
    return `[${featureKey}] ${name}`;
}

export function createNgrxAction<T extends object>(featureName: string, actionName: string, status?: AsyncActionStatus, origin?: Action) {
    const actionType: string = createActionName(featureName, actionName);

    if (status === undefined || status === null) {
        return createAction(actionType, (payload: T = Object.create({})) => ({ payload }));
    }

    return createAction(actionType, (payload: T = Object.create({})) => ({
        payload,
        commandType: origin ? origin.type : actionType,
        status,
    }));
}
