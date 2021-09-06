import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayBaseComponent } from './ui/overlay-base/overlay-base.component';
import { OverlayDialogService } from './domain/services/overlay-dialog.service';

@NgModule({
    declarations: [
        OverlayBaseComponent,
    ],
    imports: [
        CommonModule,
        OverlayModule
    ],
})
export class OverlayDialogModule {
    public static forRoot(): ModuleWithProviders<OverlayDialogModule> {
        return {
            ngModule: OverlayDialogModule,
            providers: [
                OverlayDialogService,
            ],
        };
    }
}
