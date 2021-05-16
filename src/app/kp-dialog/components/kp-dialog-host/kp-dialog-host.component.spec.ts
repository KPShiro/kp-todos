import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KpDialogHostComponent } from './kp-dialog-host.component';

describe('KpDialogHostComponent', () => {
    let component: KpDialogHostComponent;
    let fixture: ComponentFixture<KpDialogHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ KpDialogHostComponent ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(KpDialogHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
