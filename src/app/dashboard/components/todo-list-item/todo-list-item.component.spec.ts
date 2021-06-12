import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListItemComponent } from './todo-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '@app/core/core.module';
import { ITodo } from '@app/shared/interfaces/todo.interface';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoListItemComponent', () => {
    let fixture: ComponentFixture<TodoListItemComponent>;
    let component: TodoListItemComponent;

    const initialTodo: ITodo = {
        id: '0',
        isDone: false,
        text: 'Lorem ipsum',
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
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListItemComponent);
        component = fixture.componentInstance;
        component.todo = initialTodo;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {
        beforeEach(() => {
            component.ngOnInit();
        });

        it('host should not have \'done\' class', () => {
            const expectedClassList: string = fixture.nativeElement.classList.toString();
            expect(expectedClassList).toEqual('app-todo-list-item');
        });
    });

    describe('onCheckClick()', () => {
        it('should emit checkboxClick event', () => {
            jest.spyOn(component, 'onCheckClick');
            jest.spyOn(component.checkboxClick, 'emit');
            component.onCheckClick(new Event('click'));

            expect(component.onCheckClick).toHaveBeenCalledTimes(1);
            expect(component.checkboxClick.emit).toHaveBeenCalledTimes(1);
            expect(component.checkboxClick.emit).toHaveBeenCalledWith(!initialTodo.isDone);
        });
    });
});
