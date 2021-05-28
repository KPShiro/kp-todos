import * as uuid from 'uuid';

import { ITodo } from "../interfaces/todo.interface";

export class Todo implements ITodo {

    public readonly id: string = uuid.v4();
    public readonly isDone: boolean = false;

    public constructor(
        public text: string | undefined = undefined,
        public readonly children: ITodo[] = [],
    ) { }

    public addChild(todo: ITodo): ITodo[] {
        return this.children.reduce<ITodo[]>((todos, todo) => {
            todos.push(todo);
            return todos;
        }, this.children);
    }

}
