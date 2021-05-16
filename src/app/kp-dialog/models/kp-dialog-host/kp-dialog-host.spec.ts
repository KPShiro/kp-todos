import { TestBed } from '@angular/core/testing';
import { KpDialogHost } from './kp-dialog-host';

describe('KpDialogHost', () => {
    let service: KpDialogHost;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(KpDialogHost);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
