import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListItemComponent } from './todo-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore } from '@ngrx/store/testing';
import { CoreModule } from '@app/core/core.module';

describe('TodoListItemComponent', () => {
    let fixture: ComponentFixture<TodoListItemComponent>;
    let component: TodoListItemComponent;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
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
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
