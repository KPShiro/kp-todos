import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListGroupItemComponent } from './todo-list-group-item.component';
import { ITodo } from '@app/core/domain/interfaces/todo.interface';

describe('TodoListGroupItemComponent', () => {
    let fixture: ComponentFixture<TodoListGroupItemComponent>;
    let component: TodoListGroupItemComponent;

    const mockedTodoItem: ITodo = {
        id: '0',
        isDone: false,
        date: new Date().toISOString(),
        text: 'Lorem ipsum',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TodoListGroupItemComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListGroupItemComponent);
        component = fixture.componentInstance;
        component.todo = mockedTodoItem;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {
        beforeEach(() => {
            component.ngOnInit();
        });

        it('host should not have \'completed\' class', () => {
            const expectedClassList: string = fixture.nativeElement.classList.toString();
            expect(expectedClassList).toEqual(expect.stringContaining('app-todo-list-group-item'));
        });
    });

    describe('onCheckClick()', () => {
        it('should emit checkboxClick event', () => {
            jest.spyOn(component, 'onCheckboxClick');
            jest.spyOn(component.checkboxClick, 'emit');
            component.onCheckboxClick(new Event('click'));

            expect(component.onCheckboxClick).toHaveBeenCalledTimes(1);
            expect(component.checkboxClick.emit).toHaveBeenCalledTimes(1);
            expect(component.checkboxClick.emit).toHaveBeenCalledWith(!mockedTodoItem.isDone);
        });
    });
});
