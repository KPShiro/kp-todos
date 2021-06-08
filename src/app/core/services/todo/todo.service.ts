import { Injectable } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TodoService {

    public constructor() { }

    public getTodos(): Observable<ITodo[]> {
        return of([
            {
                id: '1',
                isDone: false,
                text: 'Clean the code',
                children: [],
            },
            {
                id: '2',
                isDone: false,
                text: 'Update documentation',
                children: [],
            },
            {
                id: '3',
                isDone: false,
                text: 'Send updates',
                children: [],
            },
            {
                id: '4',
                isDone: true,
                text: 'Prepare release notes',
                children: [],
            },
            {
                id: '5',
                isDone: false,
                text: 'Create production PullRequest',
                children: [],
            }
        ]).pipe(
            delay(1000),
        );
    }

}
