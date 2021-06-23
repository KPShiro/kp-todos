import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppState } from '@app/core/state/app.state';
import { todoInitialState } from '@app/dashboard/todo-state/todo.state';
import { KpOverlayRef } from '@app/kp-overlay/models';
import { provideMockStore } from '@ngrx/store/testing';
import { TodoEditFormComponent } from './todo-edit-form.component';

describe('TodoEditFormComponent', () => {
    let component: TodoEditFormComponent;
    let fixture: ComponentFixture<TodoEditFormComponent>;

    let initialState: AppState = {
        todo: todoInitialState,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            declarations: [ TodoEditFormComponent ],
            providers: [
                provideMockStore({ initialState }),
                KpOverlayRef,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoEditFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
