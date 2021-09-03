import { ITodo } from "@app/core/domain/interfaces/todo.interface";

export interface ITodoListGroup {
    date: string;
    todos: ITodo[];
}
