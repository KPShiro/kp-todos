import { OverlayModule } from '@angular/cdk/overlay';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayDialogRef } from '@app/overlay-dialog/domain/models';
import { OverlayBaseComponent } from './overlay-base.component';

describe('OverlayBaseComponent', () => {
    let component: OverlayBaseComponent;
    let fixture: ComponentFixture<OverlayBaseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OverlayModule,
            ],
            declarations: [ OverlayBaseComponent ],
            providers: [
                {
                    provide: OverlayDialogRef,
                    useValue: { },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OverlayBaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
