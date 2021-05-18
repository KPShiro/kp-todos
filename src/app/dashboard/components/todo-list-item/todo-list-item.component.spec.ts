import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListItemComponent } from './todo-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CoreModule } from '@app/core/core.module';
import { AppState } from '@app/core/state/app.state';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoListItemComponent', () => {
    let fixture: ComponentFixture<TodoListItemComponent>;
    let component: TodoListItemComponent;
    let store: MockStore;

    const initialState: AppState = {
        dashboard: {
            todos: [],
        },
    };

    const initialTodo: ITodo = {
        id: '0',
        isDone: false,
        text: 'Lorem ipsum',
        children: [],
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                CoreModule.forRoot(),
            ],
            declarations: [
                TodoListItemComponent,
            ],
            providers: [
                provideMockStore({ initialState }),
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListItemComponent);
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        component.todo = initialTodo;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    describe('onCheckClick()', () => {
        beforeEach(() => {
            jest.spyOn(store, 'dispatch');
            component.onCheckClick(new Event('click'));
        });

        it('should dispatch update todo action', () => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith({
                todo: initialTodo,
                type: dashboardActions.toggleTodoIsDone.type,
            });
        });
    });
});
