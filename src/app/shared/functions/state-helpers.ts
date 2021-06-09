import { createAction } from "@ngrx/store";

export function createActionName(featureKey: string, name: string): string {
    return `[${featureKey}] ${name}`;
}

export function createEvent<P extends object>(featureName: string, name: string, commandType?: string) {
    const eventType: string = createActionName(featureName, name);

    if (commandType === undefined) {
        return createAction(eventType, (payload: P) => ({ payload }));
    }

    return createAction(eventType, (payload: P) => ({ payload, commandType, loading: false }));
}

export function createCommand<P extends object>(featureName: string, name: string, isAsync: boolean = false) {
    const commandType: string = createActionName(featureName, name);

    if (isAsync === true) {
        return createAction(commandType, (payload?: P) => ({ payload, commandType: commandType, loading: true }));
    }

    return createAction(commandType, (payload?: P) => ({ payload }));
}

