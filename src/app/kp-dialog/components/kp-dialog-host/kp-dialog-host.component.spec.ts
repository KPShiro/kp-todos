import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KpDialogType } from '@app/kp-dialog/enums/dialog-type.enum';
import { IKpDialogConfig } from '@app/kp-dialog/interfaces/dialog-configuration.interface';
import { KpDialogHostComponent } from './kp-dialog-host.component';

class MockElementRef {
    public nativeElement: {} = {};
}

describe('KpDialogHostComponent', () => {
    let component: KpDialogHostComponent;
    let fixture: ComponentFixture<KpDialogHostComponent>;

    let dialogConfig: IKpDialogConfig = {
        type: KpDialogType.DIALOG,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ KpDialogHostComponent ],
            providers: [
                {
                    provide: ElementRef,
                    useClass: MockElementRef,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(KpDialogHostComponent);
        component = fixture.componentInstance;
        component.config = dialogConfig;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
