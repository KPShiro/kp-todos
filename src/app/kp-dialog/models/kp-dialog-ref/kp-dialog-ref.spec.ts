import { TestBed } from '@angular/core/testing';
import { KpDialogRef } from './kp-dialog-ref';

describe('KpDialogRef', () => {
    let service: KpDialogRef;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(KpDialogRef);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
