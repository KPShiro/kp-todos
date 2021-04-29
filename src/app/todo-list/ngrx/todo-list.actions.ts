import { createAction, props } from "@ngrx/store";
import { FEATURE_KEY } from "./todo-list.selectors";

function createActionName(name: string): string {
    return `[${FEATURE_KEY}] ${name}`;
}

export const getAll = createAction(createActionName('Get all'));
export const create = createAction(createActionName('Create'), props<{ text: string }>());
export const remove = createAction(createActionName('Remove'), props<{ id: string }>());
export const update = createAction(createActionName('Update'), props<{ id: string, text: string }>());
