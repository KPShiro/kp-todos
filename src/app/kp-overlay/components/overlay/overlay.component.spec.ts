import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KpOverlayComponent } from './overlay.component';

describe('KpOverlayComponent', () => {
    let component: KpOverlayComponent;
    let fixture: ComponentFixture<KpOverlayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ KpOverlayComponent ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(KpOverlayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
