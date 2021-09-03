import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastUpdateDatePipe } from '@app/core/domain/pipes/lastUpdateDate/last-update-date-pipe.pipe';
import { TodoListGroupItemComponent } from '../todo-list-group-item/todo-list-group-item.component';
import { TodoListGroupComponent } from './todo-list-group.component';

describe('TodoListGroupComponent', () => {
    let component: TodoListGroupComponent;
    let fixture: ComponentFixture<TodoListGroupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                TodoListGroupComponent,
                TodoListGroupItemComponent,
                LastUpdateDatePipe,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
