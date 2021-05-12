import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from './todo-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState } from '@app/core/state/app.state';
import { CoreModule } from '@app/core/core.module';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

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
                }
            ],
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                CoreModule.forRoot(),
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
            jest.spyOn(store, 'dispatch');
        });

        it('should select todos from the store', (done: jest.DoneCallback) => {
            component.todos$.subscribe((todos) => {
                done();
                expect(todos.length).toEqual(1);
            });
        });
    });

    describe('onAddTodoClick()', () => {
        beforeEach(() => {
            jest.spyOn(store, 'dispatch');
            component.onAddTodoClick();
        });

        it('should dispatch add action', () => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith({ type: dashboardActions.add.type });
        });

        it('should add new todo to the list', (done: jest.DoneCallback) => {
            component.todos$.subscribe((todos) => {
                done();
                expect(todos.length).toEqual(2);
            });
        });
    });
});
