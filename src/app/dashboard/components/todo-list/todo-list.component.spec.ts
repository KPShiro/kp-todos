import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { EmptyStateComponent } from '@core/components/empty-state/empty-state.component';
import { TodoFacade } from '@app/dashboard/todo.facade';
import { Observable, of } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Update } from '@ngrx/entity';

class TodoFacadeMock {
    public readonly todos$: Observable<ITodo[]> = of([]);
    public fetchTodos(): void { }
    public updateTodo(update: Update<ITodo>): void { }
}

describe('TodoListComponent', () => {
    let fixture: ComponentFixture<TodoListComponent>;
    let component: TodoListComponent;
    let todoFacade: TodoFacadeMock;

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
                {
                    provide: TodoFacade,
                    useClass: TodoFacadeMock,
                },
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        todoFacade = TestBed.inject(TodoFacade);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(todoFacade).toBeTruthy();
        expect(component).toBeTruthy();
    });

    it('should have empty todo list', (done: jest.DoneCallback) => {
        component.todos$.subscribe((todos) => {
            expect(todos.length).toEqual(0);
            done();
        });
    });

    describe('ngOnInit()', () => {
        it('should call todoFacade.fetchTodos()', () => {
            jest.spyOn(todoFacade, 'fetchTodos');
            component.ngOnInit();
            expect(todoFacade.fetchTodos).toHaveBeenCalledTimes(1);
        });
    });

    describe('onFetchTodosClick()', () => {
        it('should call todoFacade.fetchTodos()', () => {
            jest.spyOn(todoFacade, 'fetchTodos');
            component.onFetchTodosClick();
            expect(todoFacade.fetchTodos).toHaveBeenCalledTimes(1);
        });
    });

    describe('onTodoItemCheckboxClick()', () => {
        it('should call todoFacade.fetchTodos()', () => {
            jest.spyOn(todoFacade, 'updateTodo');
            component.onTodoItemCheckboxClick({} as ITodo, true);
            expect(todoFacade.updateTodo).toHaveBeenCalledTimes(1);
        });
    });
});
