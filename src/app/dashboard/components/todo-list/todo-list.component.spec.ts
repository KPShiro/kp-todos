import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { EmptyStateComponent } from '@core/components/empty-state/empty-state.component';
import { TodoFacade } from '@app/dashboard/services/todo.facade';
import { Observable, of } from 'rxjs';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { Update } from '@ngrx/entity';
import { KpOverlayService } from '@app/kp-overlay/services/overlay.service';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { TodoListItemPlaceholderComponent } from '../todo-list-item-placeholder/todo-list-item-placeholder.component';

class TodoFacadeMock {
    public readonly todos$: Observable<ITodo[]> = of([
        {
            id: '1234',
            isDone: false,
            text: 'Lorem ipsum dolor sit amet',
        }
    ]);

    public readonly selectedTodoId$: Observable<string | undefined> = of('1');

    public readonly selectedTodo$: Observable<ITodo | undefined> = this.todos$.pipe(
        map(todos => todos[0]),
    );

    public fetchTodos(): void { }
    public createTodo(text: string): void { }
    public deleteTodo(id: string): void { }
    public updateTodo(update: Update<ITodo>): void { }
    public selectTodo(id: string): void { }
    public deselectTodo(): void {}

    public isActionPending$(action: Action): Observable<boolean> {
        return of(false);
    }

    public getActionError$(action: Action): Observable<string | undefined> {
        return of(undefined);
    }
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
                TodoListItemPlaceholderComponent,
                EmptyStateComponent,
            ],
            providers: [
                {
                    provide: TodoFacade,
                    useClass: TodoFacadeMock,
                },
                {
                    provide: KpOverlayService,
                    useValue: {},
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
            expect(todos.length).toEqual(1);
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
