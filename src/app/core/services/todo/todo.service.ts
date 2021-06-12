import { Injectable } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TodoService {

    public getTodos(): Observable<ITodo[]> {
        return of([
            {
                id: '1',
                isDone: false,
                text: 'Clean the code',
            },
            {
                id: '2',
                isDone: false,
                text: 'Update documentation',
            },
            {
                id: '3',
                isDone: false,
                text: 'Send updates',
            },
            {
                id: '4',
                isDone: true,
                text: 'Prepare release notes',
            },
            {
                id: '5',
                isDone: false,
                text: 'Create production PullRequest',
            },
        ]).pipe(
            delay(1000),
        );
    }

}
