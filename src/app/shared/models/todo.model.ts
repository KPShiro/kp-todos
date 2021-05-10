import * as uuid from 'uuid';

import { ITodo } from "../interfaces/todo.interface";

export class Todo implements ITodo {

    public readonly id: string = uuid.v4();
    public readonly isDone: boolean = false;
    public text: string | undefined;

    public constructor(
        public todoText?: string,
    ) {
        this.text = todoText;
    }

}
