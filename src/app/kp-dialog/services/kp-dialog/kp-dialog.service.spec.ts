import { TestBed } from '@angular/core/testing';
import { KpDialogService } from './kp-dialog.service';

describe('KpDialogService', () => {
    let service: KpDialogService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(KpDialogService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
