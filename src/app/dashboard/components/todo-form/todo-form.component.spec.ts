import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppState } from '@app/core/state/app.state';
import { KpDialogHost } from '@app/kp-dialog/models/kp-dialog-host';
import { provideMockStore } from '@ngrx/store/testing';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
    let component: TodoFormComponent;
    let fixture: ComponentFixture<TodoFormComponent>;

    let initialState: AppState = {};

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            declarations: [ TodoFormComponent ],
            providers: [
                provideMockStore({ initialState }),
                {
                    provide: KpDialogHost,
                    useValue: new KpDialogHost(),
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
