import { TestBed } from '@angular/core/testing';
import { VibrationService } from './vibration.service';

describe('VibrationService', () => {
    let service: VibrationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ VibrationService ],
        });
        service = TestBed.inject(VibrationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
