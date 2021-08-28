import { ITodo } from "@app/core/domain/interfaces/todo.interface";
import { Update } from "@ngrx/entity";
import { AsyncActionStatus, createNgrxAction } from "../loading-state/loading-state-utils";
import { TODO_STATE_KEY } from "./todo-state";

export const fetchTodos = createNgrxAction(
    TODO_STATE_KEY, 'Fetch todos', AsyncActionStatus.PENDING
);
export const fetchTodosError = createNgrxAction<{ error: any }>(
    TODO_STATE_KEY, 'Fetch todos error', AsyncActionStatus.ERROR, fetchTodos
);
export const fetchTodosSuccess = createNgrxAction<{ todos: ITodo[] }>(
    TODO_STATE_KEY, 'Fetch todos success', AsyncActionStatus.SUCCESS, fetchTodos
);


export const createTodo = createNgrxAction<{ text: string }>(
    TODO_STATE_KEY, 'Create todo', AsyncActionStatus.PENDING
);
export const createTodoError = createNgrxAction<{ error: any }>(
    TODO_STATE_KEY, 'Create todo error', AsyncActionStatus.ERROR, createTodo
);
export const createTodoSuccess = createNgrxAction<{ todo: ITodo }>(
    TODO_STATE_KEY, 'Create todo success', AsyncActionStatus.SUCCESS, createTodo
);


export const updateTodo = createNgrxAction<{ update: Update<ITodo> }>(
    TODO_STATE_KEY, 'Update todo', AsyncActionStatus.PENDING
);
export const updateTodoError = createNgrxAction<{ error: any }>(
    TODO_STATE_KEY, 'Update todo error', AsyncActionStatus.ERROR, updateTodo
);
export const updateTodoSuccess = createNgrxAction<{ update: Update<ITodo> }>(
    TODO_STATE_KEY, 'Update todo success', AsyncActionStatus.SUCCESS, updateTodo
);


export const deleteTodo = createNgrxAction<{ id: string }>(
    TODO_STATE_KEY, 'Delete todo', AsyncActionStatus.PENDING
);
export const deleteTodoError = createNgrxAction<{ error: any }>(
    TODO_STATE_KEY, 'Delete todo error', AsyncActionStatus.ERROR, deleteTodo
);
export const deleteTodoSuccess = createNgrxAction<{ id: string }>(
    TODO_STATE_KEY, 'Delete todo success', AsyncActionStatus.SUCCESS, deleteTodo
);


export const selectTodo = createNgrxAction<{ id: string }>(
    TODO_STATE_KEY, 'Select todo'
);
export const deselectTodo = createNgrxAction(
    TODO_STATE_KEY, 'Deselect todo'
);
