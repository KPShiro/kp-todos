import { Injectable } from '@angular/core';

@Injectable()
export class VibrationService {

    public vibrate(pattern: number | number[]): void {
        if(!window.navigator.vibrate) return;
        window.navigator.vibrate(pattern);
    }

}
