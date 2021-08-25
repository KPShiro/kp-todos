import { Injectable } from '@angular/core';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TodoService {

    private mockedData: ITodo[] = [
        {
            id: '1',
            isDone: false,
            text: 'Clean the code',
            date: '2021-09-24T22:00:00.000Z',
        },
        {
            id: '2',
            isDone: false,
            text: 'Update documentation',
            date: '2021-09-24T22:00:00.000Z',
        },
        {
            id: '3',
            isDone: false,
            text: 'Send updates',
            date: '2021-09-24T22:00:00.000Z',
        },
        {
            id: '4',
            isDone: true,
            text: 'Prepare release notes',
            date: '2021-09-17T22:00:00.000Z',
        },
        {
            id: '5',
            isDone: false,
            text: 'Create production PullRequest',
            date: '2021-09-17T22:00:00.000Z',
        },
    ];

    public getTodos(): Observable<ITodo[]> {
        return of(this.mockedData).pipe(
            delay(2000),
        );
    }

}
