import { TestBed } from '@angular/core/testing';
import { TodoFacade } from './todo-facade.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialTodoState, todoStateEntityAdapter } from '@app/ngrx/todo-state/todo-state';
import { AppState } from '@app/ngrx/app-state/app-state';

describe('TodoFacade', () => {
    let service: TodoFacade;
    let store: MockStore;

    let initialState: AppState = {
        todo: initialTodoState,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                provideMockStore({ initialState }),
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(TodoFacade);
        store = TestBed.inject(MockStore);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
        expect(store).toBeTruthy();
    });

    describe('todos$', () => {
        it('should return empty array', (done: jest.DoneCallback) => {
            service.todos$.subscribe(todos => {
                expect(todos).toEqual([]);
                done();
            });
        });

        it('should return array of todos', (done: jest.DoneCallback) => {
            store.setState({
                todo: todoStateEntityAdapter.setAll([
                    {
                        id: '1234',
                        isDone: false,
                        text: 'asdas',
                    },
                ], initialTodoState),
            });

            service.todos$.subscribe(todos => {
                expect(todos.length).toEqual(1);
                expect(todos[0].id).toEqual('1234');
                done();
            });
        });
    });
});
