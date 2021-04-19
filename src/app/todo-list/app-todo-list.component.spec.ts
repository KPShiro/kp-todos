import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTodoListComponent } from './app-todo-list.component';

describe('AppTodoListComponent', () => {
    let component: AppTodoListComponent;
    let fixture: ComponentFixture<AppTodoListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppTodoListComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppTodoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
