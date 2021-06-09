import * as todoCommands from '@app/dashboard/state/commands';
import * as fromTodoState from '@app/dashboard/state/todo.selectors';

import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/state/app.state';
import { Update } from '@ngrx/entity';

@Injectable()
export class TodoFacade {

    public readonly todos$: Observable<ITodo[]> = this._store.select(fromTodoState.getTodos);

    public constructor(
        private readonly _store: Store<AppState>,
    ) { }

    public fetchTodos(): void {
        this._store.dispatch(todoCommands.fetchTodos());
    }

    public createTodo(text: string): void {
        this._store.dispatch(todoCommands.createTodo({ text }));
    }

    public deleteTodo(id: string): void {
        this._store.dispatch(todoCommands.deleteTodo({ id }));
    }

    public updateTodo(update: Update<ITodo>): void {
        this._store.dispatch(todoCommands.updateTodo({ update }));
    }

}
