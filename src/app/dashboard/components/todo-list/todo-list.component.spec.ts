import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { ITodo } from '@app/shared/interfaces/todo.interface';

describe('TodoListComponent', () => {
    let fixture: ComponentFixture<TodoListComponent>;
    let component: TodoListComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TodoListComponent,
                TodoListItemComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have empty todo list', () => {
        expect(component.todos.length).toEqual(0);
    });

    it('should have some todos in the list', () => {
        component.todos = [
            {} as ITodo,
            {} as ITodo,
        ];

        expect(component.todos.length).toEqual(2);
    });

    describe('onTodoItemClick()', () => {
        it('should emit todoClicked event', () => {
            const mockedMethod = jest.spyOn(component.todoClicked, 'emit');
            component.onTodoItemClick({} as ITodo);
            expect(mockedMethod).toHaveBeenCalledTimes(1);
        });
    });

    describe('onTodoItemCheckboxClick()', () => {
        it('should emit todoClicked event', () => {
            const mockedMethod = jest.spyOn(component.todoCheckboxClicked, 'emit');
            component.onTodoItemCheckboxClick({} as ITodo, true);
            expect(mockedMethod).toHaveBeenCalledTimes(1);
        });
    });
});
