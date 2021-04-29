import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../core/core.module';
import { AppState } from '../core/ngrx/app-state.interface';
import { AppTodoListComponent } from './app-todo-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('AppTodoListComponent', () => {
    let fixture: ComponentFixture<AppTodoListComponent>;
    let component: AppTodoListComponent;
    let store: MockStore;

    const initialState: AppState = {
        todosList: {
            todos: [],
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                CoreModule.forRoot(),
            ],
            declarations: [
                AppTodoListComponent,
            ],
            providers: [
                provideMockStore({ initialState }),
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppTodoListComponent);
        store = TestBed.inject(MockStore);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
