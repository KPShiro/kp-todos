import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { KpOverlayComponent } from './components';
import { KpOverlayService } from './services/overlay.service';

@NgModule({
    declarations: [
        KpOverlayComponent
    ],
    imports: [
        CommonModule,
        OverlayModule
    ],
})
export class KpOverlayModule {
    public static forRoot(): ModuleWithProviders<KpOverlayModule> {
        return {
            ngModule: KpOverlayModule,
            providers: [
                KpOverlayService,
            ],
        };
    }
}
