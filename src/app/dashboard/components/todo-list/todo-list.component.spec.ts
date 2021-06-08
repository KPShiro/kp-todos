import * as dashboardSelectors from '@app/dashboard/state/dashboard.selectors';
import * as dashboardCommands from '@app/dashboard/state/commands';

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
            error: null,
            loading: false,
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
            expect(store.select).toHaveBeenCalledWith(dashboardSelectors.getTodos);
            done();
        });
    });

    describe('onAddTodoClick()', () => {
        beforeEach(() => {
            jest.spyOn(store, 'dispatch');
            component.onAddTodoClick();
        });

        it('should dispatch openTodoCreateForm command', () => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith({ type: dashboardCommands.openTodoForm.type });
        });

        it('should add new todo to the list', (done: jest.DoneCallback) => {
            component.todos$.subscribe((todos) => {
                done();
                expect(todos.length).toEqual(2);
            });
        });
    });
});
