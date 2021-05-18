import { ITodo } from "@app/shared/interfaces/todo.interface";
import { createAction, props } from "@ngrx/store";
import { createActionName } from "src/app/shared/functions/state-helpers";
import { FEATURE_KEY } from "./dashboard.selectors";

export const getAll = createAction(createActionName(FEATURE_KEY, 'Get all todos'));

export const openTodoForm = createAction(createActionName(FEATURE_KEY, 'Open todo form'), props<{ todo?: ITodo }>());
export const toggleTodoIsDone = createAction(createActionName(FEATURE_KEY, 'Toggle todo isDone'), props<{ todo: ITodo }>());

export const create = createAction(createActionName(FEATURE_KEY, 'Create todo'), props<{ todo: ITodo }>());
export const remove = createAction(createActionName(FEATURE_KEY, 'Remove todo'), props<{ id: string }>());
export const update = createAction(createActionName(FEATURE_KEY, 'Update todo'), props<{ todo: ITodo }>());
