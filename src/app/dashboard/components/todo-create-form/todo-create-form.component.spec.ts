import * as dashboardActions from '@app/dashboard/state/dashboard.actions';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppState } from '@app/core/state/app.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TodoCreateFormComponent } from './todo-create-form.component';

describe('TodoCreateFormComponent', () => {
    let component: TodoCreateFormComponent;
    let fixture: ComponentFixture<TodoCreateFormComponent>;
    let store: MockStore;

    const initialState: AppState = {};

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

        it('should dispatch create dashboardAction', () => {
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith({
                type: dashboardActions.create.type,
                text: '',
            });
        });

        it('should reset form', () => {
            expect(component.form.reset).toHaveBeenCalledTimes(1);
            expect(component.form.value).toEqual({
                text: null,
            });
        });
    });
});
