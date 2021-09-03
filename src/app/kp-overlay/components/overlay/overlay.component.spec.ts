import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KpOverlayRef } from '@app/kp-overlay/models';
import { KpOverlayComponent } from './overlay.component';

describe('KpOverlayComponent', () => {
    let component: KpOverlayComponent;
    let fixture: ComponentFixture<KpOverlayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OverlayModule,
            ],
            declarations: [ KpOverlayComponent ],
            providers: [
                {
                    provide: KpOverlayRef,
                    useValue: { },
                },
            ],
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
