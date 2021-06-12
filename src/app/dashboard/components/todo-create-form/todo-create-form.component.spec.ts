import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppState } from '@app/core/state/app.state';
import { todoInitialState } from '@app/dashboard/todo-state/todo.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TodoCreateFormComponent } from './todo-create-form.component';

describe('TodoCreateFormComponent', () => {
    let component: TodoCreateFormComponent;
    let fixture: ComponentFixture<TodoCreateFormComponent>;
    let store: MockStore;

    const initialState: AppState = {
        todo: todoInitialState,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            declarations: [ TodoCreateFormComponent ],
            providers: [
                provideMockStore({ initialState }),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoCreateFormComponent);
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('onFormSubmit()', () => {
        beforeEach(() => {
            jest.spyOn(store, 'dispatch');
            jest.spyOn(component.form, 'reset');
            component.onFormSubmit();
        });

        it('should reset form', () => {
            expect(component.form.reset).toHaveBeenCalledTimes(1);
            expect(component.form.value).toEqual({
                text: null,
            });
        });
    });
});
