import * as dashboardSelectors from '@app/dashboard/state/dashboard.selectors';
import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from './todo-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '@app/core/state/app.state';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { EmptyStateComponent } from '../../../core/components/empty-state/empty-state.component';

describe('TodoListComponent', () => {
    let fixture: ComponentFixture<TodoListComponent>;
    let component: TodoListComponent;
    let store: MockStore;

    const initialState: AppState = {
        dashboard: {
            todos: [
                {
                    id: '0',
                    isDone: false,
                    text: 'Lorem ipsum',
                    children: [],
                },
                {
                    id: '1',
                    isDone: true,
                    text: 'Dolor sit amet',
                    children: [],
                }
            ],
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                TodoListComponent,
                TodoListItemComponent,
                EmptyStateComponent,
            ],
            providers: [
                provideMockStore({ initialState }),
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {
        beforeEach(() => {
            jest.spyOn(store, 'select');
            component.ngOnInit();
        });

        it('should select todos from the store', (done: jest.DoneCallback) => {
            expect(store.select).toHaveBeenCalledTimes(1);
            expect(store.select).toHaveBeenCalledWith(dashboardSelectors.selectTodos);
            done();
        });

        it('should calculate todos count', (done: jest.DoneCallback) => {
            component.todosCount$.subscribe((count) => {
                expect(count).toEqual(2);
                done();
            });
        });

        it('should calculate done todos count', (done: jest.DoneCallback) => {
            component.doneTodosCount$.subscribe((count) => {
                expect(count).toEqual(1);
                done();
            });
        });
    });

    describe('onAddTodoClick()', () => {
        beforeEach(() => {
            jest.spyOn(store, 'dispatch');
            component.onAddTodoClick();
        });

        it('should dispatch openTodoCreateForm action', () => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith({ type: dashboardActions.openTodoCreateForm.type });
        });

        it('should add new todo to the list', (done: jest.DoneCallback) => {
            component.todos$.subscribe((todos) => {
                done();
                expect(todos.length).toEqual(2);
            });
        });
    });
});
