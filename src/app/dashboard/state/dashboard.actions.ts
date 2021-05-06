import { createAction, props } from "@ngrx/store";
import { createActionName } from "src/app/shared/functions/state-helpers";
import { FEATURE_KEY } from "./dashboard.selectors";

export const getAll = createAction(createActionName(FEATURE_KEY, 'Get all todos'));
export const create = createAction(createActionName(FEATURE_KEY, 'Create todo'), props<{ text: string }>());
export const remove = createAction(createActionName(FEATURE_KEY, 'Remove todo'), props<{ id: string }>());
export const update = createAction(createActionName(FEATURE_KEY, 'Update todo'), props<{ id: string, text: string }>());
