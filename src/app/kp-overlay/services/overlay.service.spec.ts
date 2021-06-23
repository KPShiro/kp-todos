import { TestBed } from '@angular/core/testing';
import { KpOverlayService } from './overlay.service';

describe('KpOverlayService', () => {
    let service: KpOverlayService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(KpOverlayService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
