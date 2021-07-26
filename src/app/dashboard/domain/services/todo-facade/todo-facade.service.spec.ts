import { TestBed } from '@angular/core/testing';
import { TodoFacade } from './todo-facade.service';
import { provideMockStore } from '@ngrx/store/testing';
import { AppState } from '@app/core/state/app.state';
import { todoInitialState } from '@app/dashboard/todo-state/todo.state';

describe('TodoFacade', () => {
    let service: TodoFacade;

    let initialState: AppState = {
        todo: todoInitialState,
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
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
