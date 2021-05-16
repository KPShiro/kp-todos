import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpDialogService } from './services/kp-dialog/kp-dialog.service';
import { KpDialogHostComponent } from './components/kp-dialog-host/kp-dialog-host.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        KpDialogHostComponent,
    ]
})
export class KpDialogModule {
    public static forRoot(): ModuleWithProviders<KpDialogModule> {
        return {
            ngModule: KpDialogModule,
            providers: [
                KpDialogService,
            ],
        };
    }
}
